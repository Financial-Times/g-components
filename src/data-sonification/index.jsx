import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';
import { min, max, extent } from 'd3-array';
import MIDISounds from './midisoundsreact';
import './styles.scss';

const DEFAULT_INSTRUMENTS = [
  { code: 124, volume: 0.6 },
  { code: 447, volume: 0.6 },
  { code: 771, volume: 1 },
  { code: 133, volume: 0.5 },
];

const DataSonification = React.memo(
  ({
    dataSeries,
    instruments: userInstruments,
    pitchConstantAcrossSeries,
    minPitch,
    maxPitch,
    minDataValue,
    maxDataValue,
    pitchVariable,
    timingVariable,
    duration,
    datumDuration,
    noteDuration,
    isPlaying,
    audioContext,
  }) => {
    let midiSounds = useRef(null);
    const [pitchScales, setPitchScales] = useState(null);
    const [timingScale, setTimingScale] = useState(null);
    const [stopInterval, setStopInterval] = useState(null);

    const getPitch = (datum, i) => {
      return pitchScales && Math.round(pitchScales[i](datum) / 2) * 2;
    };

    const instruments =
      userInstruments || DEFAULT_INSTRUMENTS.filter((d, index) => index < dataSeries.length);

    useEffect(() => {
      instruments.forEach(({ code, volume }) => midiSounds.setInstrumentVolume(code, volume));
    }, [instruments]);

    // Setup a scale for the pitches
    useEffect(() => {
      let pDomains;
      if (minDataValue !== null && maxDataValue !== null) {
        pDomains = dataSeries.map(() => [minDataValue, maxDataValue]);
      } else if (pitchConstantAcrossSeries) {
        pDomains = dataSeries.map(() => [
          min(dataSeries, (d) => min(d, (x) => x[pitchVariable])),
          max(dataSeries, (d) => max(d, (x) => x[pitchVariable])),
        ]);
      } else {
        pDomains = dataSeries.map((d) => extent(d, (x) => x[pitchVariable]));
      }
      const scalePitches = dataSeries.map((d, i) =>
        scaleLinear().range([minPitch, maxPitch]).domain(pDomains[i]),
      );
      setPitchScales(scalePitches);
    }, [
      dataSeries,
      pitchConstantAcrossSeries,
      pitchVariable,
      minDataValue,
      maxDataValue,
      maxPitch,
      minPitch,
    ]);

    // Setup a scale for the timings
    useEffect(() => {
      if (datumDuration) {
        return;
      }
      let totalDuration;
      if (duration) {
        totalDuration = duration;
      } else {
        totalDuration = 10;
      }
      const tDomain = [
        min(dataSeries[0], (d) => d[timingVariable]),
        max(dataSeries[0], (d) => d[timingVariable]),
      ];
      const tScale = scaleLinear().range([0, totalDuration]).domain(tDomain);
      setTimingScale([tScale]);
    }, [dataSeries, datumDuration, duration, timingVariable]);

    useEffect(() => {
      if (!isPlaying) {
        clearInterval(stopInterval);
        midiSounds.cancelQueue();
      } else if (dataSeries.length === 1 && dataSeries[0].length === 1) {
        midiSounds.playChordAt(
          midiSounds.contextTime(),
          instruments[0].code,
          [getPitch(dataSeries[0][0][pitchVariable], 0)],
          noteDuration,
        );
      } else {
        const getTime = (when, timeVar, j) => {
          if (datumDuration) {
            return when + j * datumDuration;
          }
          return timingScale && when + timingScale[0](timeVar);
        };
        const when = midiSounds.contextTime();
        for (let i = 0; i < dataSeries.length; i += 1) {
          for (let j = 0; j < dataSeries[i].length; j += 1) {
            midiSounds.playChordAt(
              getTime(when, dataSeries[i][j][timingVariable], j),
              instruments[i].code,
              [getPitch(dataSeries[i][j][pitchVariable], i)],
              noteDuration,
            );
          }
        }
        const intervalId = setInterval(
          (a, b) => {
            if (a.contextTime() > b + dataSeries[0].length * 0.5) {
              clearInterval(intervalId);
            }
          },
          500,
          midiSounds,
          when,
        );

        setStopInterval(intervalId);
      }
    }, [isPlaying, dataSeries]);

    return (
      <div className="sound">
        <MIDISounds
          /* eslint-disable-next-line no-return-assign */
          ref={(ref) => (midiSounds = ref)}
          appElementName="root"
          instruments={instruments.map((i) => i.code)}
          audioContext={audioContext}
        />
      </div>
    );
  },
);

DataSonification.propTypes = {
  dataSeries: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  instruments: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    }),
  ),
  pitchConstantAcrossSeries: PropTypes.bool,
  minPitch: PropTypes.number,
  maxPitch: PropTypes.number,
  datumDuration: PropTypes.number,
  pitchVariable: PropTypes.string.isRequired,
  timingVariable: PropTypes.string.isRequired,
  duration: PropTypes.number,
  minDataValue: PropTypes.number,
  maxDataValue: PropTypes.number,
  noteDuration: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  audioContext: PropTypes.object.isRequired,
};

DataSonification.defaultProps = {
  instruments: null,
  pitchConstantAcrossSeries: false,
  minPitch: 36,
  maxPitch: 91,
  datumDuration: null,
  duration: null,
  minDataValue: null,
  maxDataValue: null,
  noteDuration: 0.5,
};

export default DataSonification;
