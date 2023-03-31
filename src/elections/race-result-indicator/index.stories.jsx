import '../../shared/critical-path.scss';
import RaceResult from './';

export default {
  title: 'Elections/GE2019/Race Result Indicator',
  component: RaceResult,
};

export const Examples = {
  render: () => (
    <>
      Various permutations (Large):
      <div
        style={{
          width: '100%',
        }}
      >
        <RaceResult breakpoint="XL" incumbent="Labour" winner="Labour" />
        <RaceResult breakpoint="XL" incumbent="Conservative" winner="Labour" />
        <RaceResult breakpoint="XL" incumbent="Labour" winner="Conservative" />
        <RaceResult breakpoint="XL" incumbent="Liberal Democrats" winner="Liberal Democrats" />
        <RaceResult breakpoint="XL" incumbent="Conservative" winner="Liberal Democrats" />
        <RaceResult breakpoint="XL" incumbent="Green" winner="Green" />
      </div>
      Various permutations (Small):
      <div
        style={{
          width: '100%',
        }}
      >
        <RaceResult breakpoint="S" incumbent="Labour" winner="Labour" />
        <RaceResult breakpoint="S" incumbent="Conservative" winner="Labour" />
        <RaceResult breakpoint="S" incumbent="Labour" winner="Conservative" />
        <RaceResult breakpoint="S" incumbent="Liberal Democrats" winner="Liberal Democrats" />
        <RaceResult breakpoint="S" incumbent="Conservative" winner="Liberal Democrats" />
        <RaceResult breakpoint="S" incumbent="Green" winner="Green" />
      </div>
      Party names longer than 20 letter long default to their shortname ("Scottish National Party"
      will always render as "SNP"):
      <div
        style={{
          width: '100%',
        }}
      >
        <ul>
          <li>
            S breakpoint:{' '}
            <RaceResult breakpoint="S" incumbent="Labour" winner="Scottish National Party" />
          </li>
          <li>
            XL breakpoint:{' '}
            <RaceResult breakpoint="XL" incumbent="Conservative" winner="Scottish National Party" />
          </li>
        </ul>
      </div>
      Speaker:
      <div
        style={{
          width: '100%',
        }}
      >
        <ul>
          <li>
            {`Labour -> The Speaker`}
            <RaceResult breakpoint="S" incumbent="Labour" winner="The Speaker" />
          </li>
          <li>
            {`The Speaker -> Conservative`}
            <RaceResult breakpoint="S" incumbent="The Speaker" winner="Conservative" />
          </li>
        </ul>
      </div>
    </>
  ),

  name: 'Examples',
};
