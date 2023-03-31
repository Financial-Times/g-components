import StoryTopper from '../story-topper';
import Epilogue from '../epilogue';
import { GridContainer, GridRow, GridChild } from '../grid';
import { props } from './props';
import ArticleLayout from './';

export default {
  title: 'Layouts/Article',
  component: ArticleLayout,
};

export const StarterKitDefaultBody = {
  render: () => (
    <ArticleLayout {...props}>
      <main key="main" role="main">
        <article className="article" itemScope itemType="https://schema.org/Article">
          <GridContainer className="article-head">
            <GridRow>
              <GridChild colspan="12 S11 Scenter M9 L8 XL7">
                <StoryTopper {...props} />
              </GridChild>
            </GridRow>
          </GridContainer>
          <div className="article-body o-editorial-typography-body" itemProp="articleBody">
            <GridContainer>
              <GridRow>
                <GridChild colspan="12 S11 Scenter M9 L8 XL7">
                  <div className="o-editorial-layout-wrapper">
                    <p>
                      Ik kie neġi æpude pōsÞpriskribo, anċ ēg tiel subtegmenÞo. Giga gārði
                      esperǣntigo vi jes. Ċit plēj esceptīnte hu, ōl vola eksploðæ poǽ. Ōīð gh pǽƿjo
                      s'joro pronomeċa, mi paki vice fiksa vir. Trǣ kibi multa ok, sur ðū īnfāno
                      kæŭze. Om ene modō sekvanta proksimumecō, ānÞ sh tiele hiper defīnītive.
                    </p>
                    <p>
                      Nk sola ēsperanÞiġo obl, mulÞō ipsilono nēdifīnita ien ed. Trīliono kōmpleksa
                      co mil, kī āġā farī onin triǣnġulo. I eŭro postā eksteren eƿd, ig nūna viro
                      īnstruītulo anc, gē īsm mēze ƿuancilo kīlometro. Ts rīlāte nekuÞima ðārǽlȝæjdō
                      plue.
                    </p>
                    <p>
                      Sēmi rolfinaĵo far nv, sūpēr sċivolema ǽfgænistāno kaj ej. LēÞēri frǽzmelodio
                      eg plue, kiomæs sælutfrāzo ig hej. Korūso ekskluzive ǽnÞǣŭprīskrībo ȝo ena,
                      ilī hā duonvokalō sekviƿȝēro. Lo esti adjēktivo duǣ, san simil multekostā
                      iƿfinitīvo ēj. Is pakī rolfinaĵō sāt, kūƿ æl jaro sæmtempē, milo īmperǣtīvo ba
                      ƿiǣ. Malebliġi esperantiġo pri rē, dum et duōno grupo sekstiliono.
                    </p>
                    <p>
                      Fri ok ðekǣ hūrā, ho resÞi fīnāĵvorto substǽnÞivā ǽjn. Oz ūƿ' mēġā okej'
                      perlæbori, ēl ǣŭ pobo līgvokālo, tio esÞiel finnlanðo il. Ad oƿī ðeko
                      ālternaÞivǣ, i kvær fuÞuro tabelvorto iēl, veo mo mālpli alimǣnierē. Movi
                      ilīard anÞāŭpǣrto īli om, sorī popolnomo prēpozīcīō ul tiē, prā mīria kurÞā
                      praaƿtaŭhieraŭ lo.
                    </p>
                    <p>
                      Prōto rōlfīnaĵo posÞpostmorgæŭ vol je, ve kelkē inkluzive siƿ. Ōmetr ġræðo
                      ipsilōno ðū ǽto, iġi negi dēcilionō esperantigo æc, il unuo ulÞra aŭ. Milo
                      fini iufoje dis be, ænt ēl hēkto hǣlÞōsÞreko, hot ab mēġā sūbfrǣzo. Rō āpuð
                      kiloġrāmo mal, ties kromakċento iƿÞerogatīvo ot nur. Kunskribo profitænÞo
                      prǽantæŭlǽsÞa ǣs plue, tǣgō tiūdirekten ni neā.
                    </p>
                  </div>
                </GridChild>
              </GridRow>
            </GridContainer>
          </div>
          <Epilogue />
        </article>
      </main>
    </ArticleLayout>
  ),

  name: 'Starter Kit default body',
};
