import '../../shared/critical-path.scss';
import NetChangeBarChart from './';

export default {
  title: 'Elections/GE2019/Net Change Bar Chart',
  component: NetChangeBarChart,
};

export const Examples = {
  render: () => (
    <>
      Basic:
      <NetChangeBarChart
        tableHeaders={['Party', '0', '+/-']}
        data={[
          {
            party: 'Conservative',
            seatChange: -13,
            isInTable: true,
          },
          {
            party: 'Labour',
            seatChange: 30,
            isInTable: true,
          },
          {
            party: 'SNP',
            seatChange: -21,
            isInTable: true,
          },
          {
            party: 'Liberal Democrats',
            seatChange: 4,
            isInTable: true,
          },
          {
            party: 'DUP',
            seatChange: 2,
            isInTable: true,
          },
          {
            party: 'Sinn Fein',
            seatChange: 2,
            isInTable: true,
          },
          {
            party: 'Independent/Others',
            seatChange: -9,
            isInTable: true,
            isOthers: true,
          },
          {
            party: 'Alliance',
            seatChange: 2,
            isInTable: false,
            isOthers: true,
          },
          {
            party: 'UUP',
            seatChange: 1,
            isInTable: false,
            isOthers: true,
          },
        ]}
      />
      Empty state:
      <NetChangeBarChart
        tableHeaders={['Party', '0', '+/-']}
        data={[
          {
            party: 'Conservative',
            seatChange: 0,
            isInTable: true,
          },
          {
            party: 'Labour',
            seatChange: 0,
            isInTable: true,
          },
          {
            party: 'SNP',
            seatChange: 0,
            isInTable: true,
          },
          {
            party: 'Liberal Democrats',
            seatChange: 0,
            isInTable: true,
          },
          {
            party: 'DUP',
            seatChange: 0,
            isInTable: true,
          },
          {
            party: 'Sinn Fein',
            seatChange: 0,
            isInTable: true,
          },
          {
            party: 'Independent/Others',
            seatChange: 0,
            isInTable: true,
            isOthers: true,
          },
          {
            party: 'Alliance',
            seatChange: 0,
            isInTable: false,
            isOthers: true,
          },
          {
            party: 'UUP',
            seatChange: 0,
            isInTable: false,
            isOthers: true,
          },
        ]}
      />
    </>
  ),

  name: 'Examples',
};
