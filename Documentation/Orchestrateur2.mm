<map version="freeplane 1.9.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Orchestrateur" FOLDED="false" ID="ID_696401721" CREATED="1610381621824" MODIFIED="1635628359863" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle" zoom="1.331">
    <properties show_icon_for_attributes="true" fit_to_viewport="false" show_note_icons="true" edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ID="ID_271890427" ICON_SIZE="12 pt" COLOR="#000000" STYLE="fork">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" DASH="" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_271890427" STARTARROW="DEFAULT" ENDARROW="NONE"/>
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
<richcontent CONTENT-TYPE="plain/auto" TYPE="DETAILS"/>
<richcontent TYPE="NOTE" CONTENT-TYPE="plain/auto"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.selection" BACKGROUND_COLOR="#4e85f8" STYLE="bubble" BORDER_COLOR_LIKE_EDGE="false" BORDER_COLOR="#4e85f8"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important" ID="ID_67550811">
<icon BUILTIN="yes"/>
<arrowlink COLOR="#003399" TRANSPARENCY="255" DESTINATION="ID_67550811"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10 pt" SHAPE_VERTICAL_MARGIN="10 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="4" RULE="ON_BRANCH_CREATION"/>
<node TEXT="CONFIG" LOCALIZED_STYLE_REF="styles.topic" POSITION="right" ID="ID_74800879" CREATED="1635627513004" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<edge COLOR="#ff0000"/>
<node TEXT="DEV" LOCALIZED_STYLE_REF="styles.topic" ID="ID_158182036" CREATED="1635627520626" MODIFIED="1635628632718">
<icon BUILTIN="folder"/>
<node TEXT="CCEmailError" ID="ID_1162254175" CREATED="1635627529947" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="CCEmailRecap" ID="ID_1619702157" CREATED="1635627586258" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailError" ID="ID_1725988054" CREATED="1635627597154" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailRecap" ID="ID_952462174" CREATED="1635627605195" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
</node>
<node TEXT="UAT" LOCALIZED_STYLE_REF="styles.topic" ID="ID_520648401" CREATED="1635627533259" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="CCEmailError" ID="ID_70595644" CREATED="1635627529947" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="CCEmailRecap" ID="ID_1170723843" CREATED="1635627586258" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailError" ID="ID_478821951" CREATED="1635627597154" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailRecap" ID="ID_988570479" CREATED="1635627605195" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
</node>
<node TEXT="PrePROD" LOCALIZED_STYLE_REF="styles.topic" ID="ID_790443388" CREATED="1635627536515" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="CCEmailError" ID="ID_1227941771" CREATED="1635627529947" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="CCEmailRecap" ID="ID_174824085" CREATED="1635627586258" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailError" ID="ID_989428257" CREATED="1635627597154" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailRecap" ID="ID_1934961965" CREATED="1635627605195" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
</node>
<node TEXT="PROD" LOCALIZED_STYLE_REF="styles.topic" ID="ID_959758627" CREATED="1635627542322" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="CCEmailError" ID="ID_1743018542" CREATED="1635627529947" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="CCEmailRecap" ID="ID_233801132" CREATED="1635627586258" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailError" ID="ID_259947356" CREATED="1635627597154" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailRecap" ID="ID_60936981" CREATED="1635627605195" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
</node>
<node TEXT="TemplateFolder" ID="ID_939636883" CREATED="1635627605195" MODIFIED="1635628920531">
<icon BUILTIN="pencil"/>
</node>
</node>
<node TEXT="RPA0002" LOCALIZED_STYLE_REF="styles.topic" POSITION="left" ID="ID_33491878" CREATED="1635627676467" MODIFIED="1635884974372">
<icon BUILTIN="folder"/>
<edge COLOR="#00ff00"/>
<node TEXT="DEV" LOCALIZED_STYLE_REF="styles.topic" ID="ID_1334895212" CREATED="1635627630970" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="RPA0002_BOT-B.V1.0" ID="ID_1166695531" CREATED="1635628652834" MODIFIED="1635628781411">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_530319379" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
<node TEXT="UAT" LOCALIZED_STYLE_REF="styles.topic" ID="ID_1495783303" CREATED="1635627641890" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="RPA0002_BOT-B.V0.5" ID="ID_187465739" CREATED="1635628652834" MODIFIED="1635628792307">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_1662743904" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
<node TEXT="PrePROD" LOCALIZED_STYLE_REF="styles.topic" ID="ID_1789142982" CREATED="1635627646907" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
</node>
<node TEXT="PROD" LOCALIZED_STYLE_REF="styles.topic" ID="ID_115888723" CREATED="1635627660915" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
</node>
</node>
<node TEXT="RPA0003" LOCALIZED_STYLE_REF="styles.topic" POSITION="left" ID="ID_190897071" CREATED="1635627676467" MODIFIED="1635884978337">
<icon BUILTIN="folder"/>
<edge COLOR="#ff00ff"/>
<node TEXT="DEV" LOCALIZED_STYLE_REF="styles.topic" ID="ID_834759300" CREATED="1635627630970" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="RPA0003_BOT-C.V1.0" ID="ID_589940392" CREATED="1635628652834" MODIFIED="1635628810747">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_1701015572" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
<node TEXT="UAT" LOCALIZED_STYLE_REF="styles.topic" ID="ID_1802638350" CREATED="1635627641890" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="RPA0003_BOT-C.V1.0" ID="ID_775058934" CREATED="1635628652834" MODIFIED="1635628820531">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_1164437157" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
<node TEXT="PrePROD" LOCALIZED_STYLE_REF="styles.topic" ID="ID_801047764" CREATED="1635627646907" MODIFIED="1635628851039">
<icon BUILTIN="folder"/>
<node TEXT="RPA0003_BOT-C.V1.0" ID="ID_285231600" CREATED="1635628652834" MODIFIED="1635628861311" HGAP_QUANTITY="5.75 pt" VSHIFT_QUANTITY="1.5 pt">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_1514384311" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
<node TEXT="PROD" LOCALIZED_STYLE_REF="styles.topic" ID="ID_1715040477" CREATED="1635627660915" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="RPA0003_BOT-C.V1.0" ID="ID_1757196336" CREATED="1635628652834" MODIFIED="1635628868011">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_727105695" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
</node>
<node TEXT="RPA0001" LOCALIZED_STYLE_REF="styles.topic" POSITION="right" ID="ID_1548418045" CREATED="1635627676467" MODIFIED="1635884983491">
<icon BUILTIN="folder"/>
<edge COLOR="#0000ff"/>
<node TEXT="CCEmailError" ID="ID_420179554" CREATED="1635627529947" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="CCEmailRecap" ID="ID_1535438416" CREATED="1635627586258" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailError" ID="ID_828948120" CREATED="1635627597154" MODIFIED="1635628598626">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DestinataireEmailRecap" ID="ID_1716933856" CREATED="1635627605195" MODIFIED="1635628598627">
<icon BUILTIN="pencil"/>
</node>
<node TEXT="DEV" LOCALIZED_STYLE_REF="styles.topic" ID="ID_811301455" CREATED="1635627630970" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="RPA0001_BOT-A.V1.0" ID="ID_1360807660" CREATED="1635628652834" MODIFIED="1635628748495">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_630295870" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
<node TEXT="UAT" LOCALIZED_STYLE_REF="styles.topic" ID="ID_287483413" CREATED="1635627641890" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="RPA0001_BOT-A.V0.5" ID="ID_1312260520" CREATED="1635628688634" MODIFIED="1635628748494">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_1220649934" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
<node TEXT="PrePROD" LOCALIZED_STYLE_REF="styles.topic" ID="ID_629331149" CREATED="1635627646907" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="RPA0001_BOT-A.V0.4" ID="ID_953311986" CREATED="1635628704970" MODIFIED="1635628748495">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_1895609948" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
<node TEXT="PROD" LOCALIZED_STYLE_REF="styles.topic" ID="ID_1849116088" CREATED="1635627660915" MODIFIED="1635628632719">
<icon BUILTIN="folder"/>
<node TEXT="RPA0001_BOT-A.V0.4" ID="ID_1873497581" CREATED="1635628704970" MODIFIED="1635628748495">
<icon BUILTIN="executable"/>
</node>
<node TEXT="File d&apos;attende" ID="ID_1192745032" CREATED="1635629210691" MODIFIED="1635629274348">
<icon BUILTIN="hourglass"/>
</node>
</node>
</node>
</node>
</map>
