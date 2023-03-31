import '../../shared/critical-path.scss';
import ConstituencyLookup from './';
import candidateList from '../sample-data/candidates.json';
import constituencyList from '../sample-data/constituencies.json';

export default {
  title: 'Elections/GE2019/Constituency Lookup',
  component: ConstituencyLookup,
};

export const Examples = {
  render: () => (
    <ConstituencyLookup
      constituencyList={constituencyList}
      candidateList={candidateList}
      setOpenConstituency={(c) => window.alert(`Constituency ID: ${c}`)}
    />
  ),

  name: 'Examples',
};
