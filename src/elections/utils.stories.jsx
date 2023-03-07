import { uk } from '@financial-times/politics';
const { getPartyInfo } = uk;

const parties = [
  'Conservative',
  'Labour',
  'Liberal Democrats',
  'Green',
  'ChangeUK',
  'Brexit',
  'UKIP',
  'Plaid Cymru',
  'SNP',
  'DUP',
  'Sinn Féin',
  'UUP',
  'SDLP',
  'Alliance',
  'Independent/Other',
];

export default {
  title: 'Elections/GE2019/Utilities',
};

export const GetPartyInfoPartyString = {
  render: () => (
    <>
      {parties.map((p) => {
        const { color, shortName, formattedName } = getPartyInfo(p);

        return (
          <div key={shortName}>
            <div
              style={{
                height: 20,
                width: 20,
                backgroundColor: color,
              }}
            />
            <div>
              <strong>shortName:</strong>
              {`${shortName}`}
            </div>
            <div>
              <strong>formattedName:</strong>
              {`${formattedName}`}
            </div>
            <br />
          </div>
        );
      })}
    </>
  ),

  name: 'getPartyInfo(party: string)',
};
