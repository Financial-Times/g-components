import '../../shared/critical-path.scss';
import SeatsBarChart from '.';
import { formatResultsData } from '../sample-data/utils.js';
import resultsStart from '../sample-data/results/start.json';
import resultsMiddle from '../sample-data/results/middle.json';
import resultsEnd from '../sample-data/results/end.json';

const partiesToShowInTable = [
  'Conservative',
  'Brexit',
  'Labour',
  'Liberal Democrats',
  'Green',
  'DUP',
  'Sinn Féin',
  'SNP',
];

const partiesThatAreOthers = [
  'Alliance',
  'Independent/Other',
  'Plaid Cymru',
  'SDLP',
  'Ukip',
  'UUP',
  'Independent Group for Change',
];

const resultsStartFormatted = formatResultsData(
  resultsStart,
  partiesToShowInTable,
  partiesThatAreOthers,
);

const resultsMiddleFormatted = formatResultsData(
  resultsMiddle,
  partiesToShowInTable,
  partiesThatAreOthers,
);

const resultsEndFormatted = formatResultsData(
  resultsEnd,
  partiesToShowInTable,
  partiesThatAreOthers,
);

export default {
  title: 'Elections/GE2019/Seats Bar Chart',
  component: SeatsBarChart,
};

export const Examples = {
  render: () => (
    <>
      At start of vote count:
      <SeatsBarChart
        tableHeaders={['Party', 'Seats', '% of vote']}
        data={resultsStartFormatted}
        majority={320}
      />
      Mid-count:
      <SeatsBarChart
        tableHeaders={['Party', 'Seats', '% of vote']}
        data={resultsMiddleFormatted}
        majority={320}
      />
      Final result:
      <SeatsBarChart
        tableHeaders={['Party', 'Seats', '% of vote']}
        data={resultsEndFormatted}
        majority={320}
      />
    </>
  ),

  name: 'Examples',
};
