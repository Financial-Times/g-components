import '../../shared/critical-path.scss';
import ConstituencyResultsTable from './';

export default {
  title: 'Elections/GE2019/Constituency Results Table',
  component: ConstituencyResultsTable,
};

export const Examples = {
  render: () => (
    <>
      With results:
      <ConstituencyResultsTable
        data={[
          {
            party: 'Green',
            candidate: 'Caroline Lucas',
            votes: 30149,
            showAsterick: true,
          },
          {
            party: 'Labour',
            candidate: 'Solomon Curtis',
            votes: 15450,
          },
          {
            party: 'Conservative',
            candidate: 'Emma Warman',
            votes: 11082,
          },
          {
            party: 'Ukip',
            candidate: 'Ian Buchanan',
            votes: 630,
          },
          {
            party: 'Liberal Democrats',
            candidate: 'Callum Jameson Littlelonger',
            votes: 400,
          },
          {
            party: 'Independent',
            candidate: 'Isabelle Amanda Parasram',
            votes: 376,
          },
        ]}
        tableHeaders={['Party', 'Candidate', 'Total Votes']}
        note="* Note to indicate outgoing candidate"
      />
      Without results:
      <ConstituencyResultsTable
        data={[
          {
            party: 'Green',
            candidate: 'Caroline Lucas',
            showAsterick: true,
          },
          {
            party: 'Labour',
            candidate: 'Solomon Curtis',
          },
          {
            party: 'Conservative',
            candidate: 'Emma Warman',
          },
          {
            party: 'Ukip',
            candidate: 'Ian Buchanan',
          },
          {
            party: 'Liberal Democrats',
            candidate: 'Callum James Littlemore',
          },
          {
            party: 'Independent',
            candidate: 'Isabelle Amanda Parasram',
          },
        ]}
        tableHeaders={['Party', 'Candidate']}
        note="* Note to indicate outgoing candidate"
      />
      With custom sort:
      <ConstituencyResultsTable
        data={[
          {
            party: 'Green',
            candidate: 'Caroline Lucas',
            sortName: 'Lucas, Caroline',
            showAsterick: true,
          },
          {
            party: 'Labour',
            candidate: 'Solomon Curtis',
            sortName: 'Curtis, Solomon',
          },
          {
            party: 'Conservative',
            candidate: 'Emma Warman',
            sortName: 'Warman, Emma',
          },
          {
            party: 'Ukip',
            candidate: 'Ian Buchanan',
            sortName: 'Buchanan, Ian',
          },
          {
            party: 'Liberal Democrats',
            candidate: 'Callum James Littlemore',
            sortName: 'Littlemore, Callum James',
          },
          {
            party: 'Independent',
            candidate: 'Isabelle Amanda Parasram',
            sortName: 'Parasram, Isabelle Amanda',
          },
        ]}
        tableHeaders={['Party', 'Candidate']}
        note="* Note to indicate outgoing candidate"
        sortFunction={(a, b) => a.sortName.localeCompare(b.sortName)}
      />
      With expander:
      <ConstituencyResultsTable
        expander={true}
        data={[
          {
            party: 'Green',
            candidate: 'Caroline Lucas',
            votes: 30149,
            showAsterick: true,
          },
          {
            party: 'Labour',
            candidate: 'Solomon Curtis',
            votes: 15450,
          },
          {
            party: 'Conservative',
            candidate: 'Emma Warman',
            votes: 11082,
          },
          {
            party: 'Ukip',
            candidate: 'Ian Buchanan',
            votes: 630,
          },
          {
            party: 'Liberal Democrats',
            candidate: 'Callum Jameson Littlelonger',
            votes: 400,
          },
          {
            party: 'Independent',
            candidate: 'Isabelle Amanda Parasram',
            votes: 376,
          },
        ]}
        tableHeaders={['Party', 'Candidate', 'Total Votes']}
        note="* Note to indicate outgoing candidate"
      />
      With speaker:
      <ConstituencyResultsTable
        data={[
          {
            party: 'Green',
            candidate: 'Caroline Lucas Test',
            votes: 30149,
            showAsterick: true,
          },
          {
            party: 'Labour',
            candidate: 'Solomon Curtis Test',
            votes: 15450,
          },
          {
            party: 'Conservative',
            candidate: 'Emma Warman Test',
            votes: 11082,
          },
          {
            party: 'Ukip',
            candidate: 'Ian Buchanan Test',
            votes: 630,
          },
          {
            party: 'Liberal Democrats',
            candidate: 'Callum Jameson Littlelonger Test',
            votes: 400,
          },
          {
            party: 'The Speaker',
            candidate: 'Isabelle Amanda Parasram Test',
            votes: 376,
          },
        ]}
        tableHeaders={['Party', 'Candidate', 'Total Votes']}
        note="* Note to indicate outgoing candidate"
      />
    </>
  ),

  name: 'Examples',
};
