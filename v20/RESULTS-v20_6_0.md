## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|697,041,518|96|
|Using dot notation|716,643,858|96|
|Using define property (writable)|3,209,257|99|
|Using define property initialized (writable)|4,211,520|93|
|Using define property (getter)|1,664,151|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":697041517.7193738,"samples":6},{"name":"Using dot notation","opsSec":716643857.9136379,"samples":8},{"name":"Using define property (writable)","opsSec":3209257.318857637,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4211519.805450716,"samples":6},{"name":"Using define property (getter)","opsSec":1664150.6633438529,"samples":7}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.021ms
new Array(length)|10|0.008ms
array.push|100|0.042ms
new Array(length)|100|0.016ms
array.push|1,000|0.081ms
new Array(length)|1,000|0.042ms
array.push|10,000|0.653ms
new Array(length)|10,000|0.615ms
array.push|1,000,000|42.835ms
new Array(length)|1,000,000|11.009ms
array.push|100,000,000|2,137.97ms
new Array(length)|100,000,000|6,281.278ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.02ms
new Array(length)|100|0.014ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.417ms
new Array(length)|10,000|0.289ms
array.push|1,000,000|33.777ms
new Array(length)|1,000,000|5.038ms
array.push|100,000,000|3,646.907ms
new Array(length)|100,000,000|5,759.764ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|314|65|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:32:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Array","hz":314.0204488300596,"cycles":2,"stats":{"deviation":0.0004251891323257915,"mean":0.003184505989102564,"moe":0.00010336691350936096,"rme":3.245932457438748,"sem":0.000052738221178245385,"variance":1.8078579824795947e-7}},{"name":"Array.from","hz":14.656660136816786,"cycles":1,"stats":{"deviation":0.0003608594937511669,"mean":0.0682283679,"moe":0.00011183151572380063,"rme":0.16390765185488282,"sem":0.0000570568957774493,"variance":1.3021957423034847e-7}}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,300|81|
|new Blob (1024)|409|64|
|text (128)|4,053|84|
|text (1024)|482|86|
|arrayBuffer (128)|4,051|83|
|arrayBuffer (1024)|484|85|
|slice (0, 64)|46,973|62|
|slice (0, 512)|14,157|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:34:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Blob (128)","hz":3299.7484036156493,"cycles":5,"stats":{"deviation":0.000038157643250203924,"mean":0.00030305340822478017,"moe":0.000008309886752266632,"rme":2.742053554501865,"sem":0.000004239738138911547,"variance":1.4560057384098328e-9}},{"name":"new Blob (1024)","hz":409.4829272750569,"cycles":2,"stats":{"deviation":0.0003372766177657548,"mean":0.002442104257324219,"moe":0.00008263277135260992,"rme":3.3836709102317175,"sem":0.00004215957722071935,"variance":1.1375551689150705e-7}},{"name":"text (128)","hz":4053.347590592856,"cycles":4,"stats":{"deviation":0.00000627164389047493,"mean":0.00024670965853528903,"moe":0.0000013412132001290726,"rme":0.543640329321451,"sem":6.842924490454452e-7,"variance":3.9333517088931515e-11}},{"name":"text (1024)","hz":482.3169966265939,"cycles":2,"stats":{"deviation":0.00008310524533592513,"mean":0.002073325234221825,"moe":0.000017564479381756848,"rme":0.8471646942718696,"sem":0.000008961469072324922,"variance":6.906481802344306e-9}},{"name":"arrayBuffer (128)","hz":4050.745304814223,"cycles":3,"stats":{"deviation":0.00000489100298203608,"mean":0.0002468681501183305,"moe":0.0000010522403529438957,"rme":0.4262357669223546,"sem":5.368573229305591e-7,"variance":2.3921910170285825e-11}},{"name":"arrayBuffer (1024)","hz":484.2776124184398,"cycles":2,"stats":{"deviation":0.00007199184948036644,"mean":0.0020649313004705875,"moe":0.000015304880369647924,"rme":0.7411810923762945,"sem":0.000007808612433493839,"variance":5.182826391603738e-9}},{"name":"slice (0, 64)","hz":46973.17051969101,"cycles":3,"stats":{"deviation":0.000014938896610694334,"mean":0.000021288748213851204,"moe":0.0000037185938629297557,"rme":17.46741436168759,"sem":0.0000018972417668008958,"variance":2.2317063194501464e-10}},{"name":"slice (0, 512)","hz":14157.44073155247,"cycles":4,"stats":{"deviation":0.00011258980688750642,"mean":0.0000706342353085975,"moe":0.000028729570918602418,"rme":40.67371975230472,"sem":0.000014657944346225725,"variance":1.267646461496599e-8}}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|171,398|61|
|[True conditional] Using constructor name|140,982|94|
|[True conditional] Check if property is valid then instanceof |141,290|93|
|[False conditional] Using instanceof only|716,436,019|95|
|[False conditional] Using constructor name|716,379,948|95|
|[False conditional] Check if property is valid then instanceof |715,812,355|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":171398.32531488896,"cycles":3,"stats":{"deviation":0.00000108489059124653,"mean":0.000005834362722989409,"moe":2.7225577248865055e-7,"rme":4.666418346186612,"sem":1.389060063717605e-7,"variance":1.1769875949752456e-12}},{"name":"[True conditional] Using constructor name","hz":140981.70666410544,"cycles":3,"stats":{"deviation":3.585299852579765e-7,"mean":0.000007093118842592395,"moe":7.247990706632206e-8,"rme":1.021834099706584,"sem":3.697954442159289e-8,"variance":1.2854375032908484e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":141290.46448648776,"cycles":3,"stats":{"deviation":5.401021305469617e-7,"mean":0.0000070776184623247135,"moe":1.0977172464124431e-7,"rme":1.5509697962044242,"sem":5.600598195981853e-8,"variance":2.917103114213673e-13}},{"name":"[False conditional] Using instanceof only","hz":716436018.8204552,"cycles":7,"stats":{"deviation":2.43038089150066e-11,"mean":1.395798052764581e-9,"moe":4.887295636722146e-12,"rme":0.35014346287717957,"sem":2.493518182001095e-12,"variance":5.906751277771542e-22}},{"name":"[False conditional] Using constructor name","hz":716379948.2313871,"cycles":6,"stats":{"deviation":3.733786741533361e-11,"mean":1.3959073009634338e-9,"moe":7.508337361506958e-12,"rme":0.5378822330340144,"sem":3.830784368115795e-12,"variance":1.3941163431250313e-21}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":715812355.1508965,"cycles":7,"stats":{"deviation":3.443945755420742e-11,"mean":1.3970141655199502e-9,"moe":6.853722346761524e-12,"rme":0.4905979134585696,"sem":3.4967971156946553e-12,"variance":1.1860762366280543e-21}}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,513|90|
|crypto.verify('RSA-SHA256')|4,515|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":4512.787787125109,"cycles":4,"stats":{"deviation":0.000008055563645276687,"mean":0.00022159251601703485,"moe":0.0000016642966917608375,"rme":0.751061778473103,"sem":8.491309651841007e-7,"variance":6.489210564310343e-11}},{"name":"crypto.verify('RSA-SHA256')","hz":4515.332713362354,"cycles":4,"stats":{"deviation":0.000008275234476338798,"mean":0.00022146762231732586,"moe":0.0000016729095207071428,"rme":0.7553743085344299,"sem":8.535252656669096e-7,"variance":6.847950563838626e-11}}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|963,656|91|
|fromUnixToISOString(new Date())|1,567,124|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":963655.8655835451,"cycles":7,"stats":{"deviation":8.738835253450707e-8,"mean":0.0000010377148479187087,"moe":1.7955145434134502e-8,"rme":1.730258121500932,"sem":9.160788486803318e-9,"variance":7.636724158695288e-15}},{"name":"fromUnixToISOString(new Date())","hz":1567123.6110113605,"cycles":6,"stats":{"deviation":2.4693365386215434e-8,"mean":6.381117564520893e-7,"moe":4.91417351443087e-9,"rme":0.7701117343071293,"sem":2.507231384913709e-9,"variance":6.097622940971425e-16}}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,362|78|
|Intl.DateTimeFormat().format(new Date())|10,504|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,790|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,828|95|
|Reusing Intl.DateTimeFormat()|482,953|84|
|Date.toLocaleDateString()|572,892|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,423|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":12361.97653262818,"cycles":5,"stats":{"deviation":0.000014737777513429302,"mean":0.0000808932129389343,"moe":0.000003270700414506574,"rme":4.043232176938752,"sem":0.0000016687247012788644,"variance":2.1720208603534242e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":10504.30240520704,"cycles":4,"stats":{"deviation":0.00009903297418189227,"mean":0.0000951990871382658,"moe":0.000022718228500647164,"rme":23.863914228139112,"sem":0.000011590932908493452,"variance":9.80752997531134e-9}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":13790.134807319851,"cycles":6,"stats":{"deviation":0.000013339882248635674,"mean":0.0000725156072781244,"moe":0.0000028873613665761623,"rme":3.981710248253255,"sem":0.000001473143554375593,"variance":1.779524584074652e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":14828.035895692918,"cycles":5,"stats":{"deviation":0.0000076146590142453515,"mean":0.00006743981516058164,"moe":0.0000015312451601966588,"rme":2.2705358200502106,"sem":7.81247530712581e-7,"variance":5.7983031903227993e-11}},{"name":"Reusing Intl.DateTimeFormat()","hz":482952.68927960657,"cycles":4,"stats":{"deviation":0.000002883661664287527,"mean":0.0000020705961933696733,"moe":6.1668123324453e-7,"rme":29.782786002371008,"sem":3.1463328226761736e-7,"variance":8.31550459408151e-12}},{"name":"Date.toLocaleDateString()","hz":572891.7301641342,"cycles":4,"stats":{"deviation":1.4582178502142534e-8,"mean":0.0000017455305205985408,"moe":2.8871240449345497e-9,"rme":0.16540094893010276,"sem":1.4730224719053826e-9,"variance":2.1263992986834784e-16}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":13423.077333497902,"cycles":5,"stats":{"deviation":0.00003317449941122932,"mean":0.0000744985650573922,"moe":0.0000069710921445266075,"rme":9.357350895492038,"sem":0.0000035566796655748,"variance":1.1005474111856546e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|697,848|91|
|Using brackets {}|720,983|99|
|Using '' + |698,636|97|
|Using date.toString()|769,871|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using String()","hz":697847.9146922365,"cycles":4,"stats":{"deviation":1.2562936357804145e-7,"mean":0.0000014329769838762333,"moe":2.5812289949633594e-8,"rme":1.8013052714783178,"sem":1.316953568858857e-8,"variance":1.578273699302373e-14}},{"name":"Using brackets {}","hz":720982.7893873907,"cycles":4,"stats":{"deviation":1.2492598262346642e-8,"mean":0.0000013869956602565872,"moe":2.46088459824198e-9,"rme":0.17742554420009712,"sem":1.2555533664499898e-9,"variance":1.5606501134438635e-16}},{"name":"Using '' + ","hz":698636.4263581352,"cycles":5,"stats":{"deviation":1.4108925894414515e-7,"mean":0.0000014313596632984318,"moe":2.8077869850054462e-8,"rme":1.9616222651790878,"sem":1.4325443801048195e-8,"variance":1.9906178989408044e-14}},{"name":"Using date.toString()","hz":769870.8603776571,"cycles":7,"stats":{"deviation":2.211727207575301e-8,"mean":0.0000012989191453608907,"moe":4.595075256317123e-9,"rme":0.3537614541080947,"sem":2.3444261511822057e-9,"variance":4.891737240728839e-16}}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,301,582|91|
|Using delete property (proto: null)|12,346,623|91|
|Using delete property (cached proto: null)|2,317,052|91|
|Using undefined assignment|691,051,498|92|
|Using undefined assignment (proto: null)|12,832,432|87|
|Using undefined property (cached proto: null)|657,958,404|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","hz":2301581.6139410236,"cycles":10,"stats":{"deviation":2.2398711678560465e-8,"mean":4.3448383231029076e-7,"moe":4.602125043689252e-9,"rme":1.0592166385612711,"sem":2.348022981474108e-9,"variance":5.01702284859281e-16}},{"name":"Using delete property (proto: null)","hz":12346623.036372328,"cycles":7,"stats":{"deviation":3.4191369600092482e-9,"mean":8.099380673193525e-8,"moe":7.025089682512215e-10,"rme":0.8673613410668688,"sem":3.584229429853171e-10,"variance":1.1690497551301282e-17}},{"name":"Using delete property (cached proto: null)","hz":2317052.249113562,"cycles":5,"stats":{"deviation":2.215172367536214e-8,"mean":4.3158284427231685e-7,"moe":4.551377943082666e-9,"rme":1.0545780499585549,"sem":2.3221316036136053e-9,"variance":4.906988617895996e-16}},{"name":"Using undefined assignment","hz":691051498.0454774,"cycles":5,"stats":{"deviation":6.861158450481643e-11,"mean":1.4470701573302877e-9,"moe":1.4020374253738284e-11,"rme":0.9688800631204083,"sem":7.153252170274635e-12,"variance":4.707549528261566e-21}},{"name":"Using undefined assignment (proto: null)","hz":12832431.73394019,"cycles":5,"stats":{"deviation":5.918778078270212e-9,"mean":7.792755268318506e-8,"moe":1.2437368490527832e-9,"rme":1.5960168210455716,"sem":6.345596168636649e-10,"variance":3.503193393981203e-17}},{"name":"Using undefined property (cached proto: null)","hz":657958404.1892625,"cycles":6,"stats":{"deviation":6.748975406996231e-11,"mean":1.5198529171949733e-9,"moe":1.410108663609234e-11,"rme":0.9277928460417852,"sem":7.194431957189969e-12,"variance":4.554866904423994e-21}}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|138,814|57|
|NodeError|112,245|87|
|NodeError Range|112,420|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:54:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Error","hz":138813.54394084972,"cycles":3,"stats":{"deviation":0.0000016111861793748566,"mean":0.0000072039080021335176,"moe":4.1827737265624826e-7,"rme":5.806256444868129,"sem":2.1340682278380013e-7,"variance":2.5959209046085473e-12}},{"name":"NodeError","hz":112245.013046531,"cycles":3,"stats":{"deviation":6.544359349406228e-7,"mean":0.000008909081774398756,"moe":1.3751927794323413e-7,"rme":1.543585314688784,"sem":7.016289690981333e-8,"variance":4.2828639294160707e-13}},{"name":"NodeError Range","hz":112420.17981254433,"cycles":3,"stats":{"deviation":6.629382551800514e-7,"mean":0.000008895200147050607,"moe":1.393059049875978e-7,"rme":1.5660794887654963,"sem":7.107444132020297e-8,"variance":4.394871301811709e-13}}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,227,505|96|
|Function returning explicitly undefined|1,203,445|93|
|Function returning implicitly undefined|1,225,280|89|
|Function returning string|1,217,010|96|
|Function returning integer|1,239,548|97|
|Function returning float|1,247,439|90|
|Function returning functions|1,173,518|96|
|Function returning arrow functions|1,229,149|93|
|Function returning empty object|1,250,268|95|
|Function returning empty array|1,219,476|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1227505.2851124387,"cycles":6,"stats":{"deviation":1.194915468052099e-8,"mean":8.146604435258302e-7,"moe":2.3903287656973713e-9,"rme":0.29341411930498157,"sem":1.2195554927027405e-9,"variance":1.4278229757901668e-16}},{"name":"Function returning explicitly undefined","hz":1203445.0597677024,"cycles":6,"stats":{"deviation":5.1501787942828e-8,"mean":8.309477793635442e-7,"moe":1.0467353792636646e-8,"rme":1.2596885210589295,"sem":5.3404866288962475e-9,"variance":2.6524341613080237e-15}},{"name":"Function returning implicitly undefined","hz":1225279.5445308075,"cycles":6,"stats":{"deviation":3.968916170448886e-8,"mean":8.161402877111826e-7,"moe":8.245803744133608e-9,"rme":1.0103414655902456,"sem":4.20704272659878e-9,"variance":1.5752295568050647e-15}},{"name":"Function returning string","hz":1217010.1505079959,"cycles":6,"stats":{"deviation":1.9803733874708486e-8,"mean":8.216858335837109e-7,"moe":3.961571844584007e-9,"rme":0.4821273146825421,"sem":2.0212101247877586e-9,"variance":3.921878753802764e-16}},{"name":"Function returning integer","hz":1239547.7455933376,"cycles":5,"stats":{"deviation":1.4019799873899788e-8,"mean":8.067458502950424e-7,"moe":2.7900502074293698e-9,"rme":0.3458400444711299,"sem":1.4234950037904947e-9,"variance":1.9655478850420052e-16}},{"name":"Function returning float","hz":1247438.6815073185,"cycles":6,"stats":{"deviation":5.597915966873265e-9,"mean":8.016426096324585e-7,"moe":1.156541420895489e-9,"rme":0.14427145051904694,"sem":5.900721535181067e-10,"variance":3.133666317217464e-17}},{"name":"Function returning functions","hz":1173517.7978646972,"cycles":6,"stats":{"deviation":4.447124576967948e-8,"mean":8.521387590538246e-7,"moe":8.896101929532275e-9,"rme":1.0439733945924599,"sem":4.5388275150674875e-9,"variance":1.977691700307235e-15}},{"name":"Function returning arrow functions","hz":1229148.7784450362,"cycles":6,"stats":{"deviation":7.203241774882446e-9,"mean":8.135711620403461e-7,"moe":1.4640050981394004e-9,"rme":0.17994800780153491,"sem":7.469413766017349e-10,"variance":5.188669206741161e-17}},{"name":"Function returning empty object","hz":1250268.2082671893,"cycles":6,"stats":{"deviation":3.8956417626345955e-9,"mean":7.998283835321633e-7,"moe":7.833814467246217e-10,"rme":0.09794369177861513,"sem":3.9968441159419475e-10,"variance":1.517602474278278e-17}},{"name":"Function returning empty array","hz":1219476.0965133877,"cycles":6,"stats":{"deviation":2.1583336951900533e-8,"mean":8.200242734229123e-7,"moe":4.363256410281132e-9,"rme":0.5320886895296651,"sem":2.2261512297352713e-9,"variance":4.658404339792749e-16}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|596,802,348|92|
|using Array.includes (first item)|597,029,397|95|
|Using raw comparison|601,347,545|98|
|Using raw comparison (first item)|600,158,974|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":596802348.3097681,"cycles":8,"stats":{"deviation":2.942916628371722e-11,"mean":1.675596623961261e-9,"moe":6.0136772565607656e-12,"rme":0.35889767086925084,"sem":3.068202681918758e-12,"variance":8.660758281546783e-22}},{"name":"using Array.includes (first item)","hz":597029396.8498778,"cycles":7,"stats":{"deviation":5.794803680082437e-11,"mean":1.6749593994472076e-9,"moe":1.1652872535482013e-11,"rme":0.6957107461427333,"sem":5.945343130347966e-12,"variance":3.3579749690696953e-21}},{"name":"Using raw comparison","hz":601347545.13663,"cycles":8,"stats":{"deviation":8.80340237843417e-12,"mean":1.6629318737350021e-9,"moe":1.742984745405283e-12,"rme":0.10481395978600609,"sem":8.89277931329226e-13,"variance":7.74998934366204e-23}},{"name":"Using raw comparison (first item)","hz":600158973.7449771,"cycles":8,"stats":{"deviation":1.5813985517527022e-11,"mean":1.6662251899026433e-9,"moe":3.18006213302949e-12,"rme":0.19085428262042417,"sem":1.6224806801170868e-12,"variance":2.500821379485544e-22}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,661,143|80|
|Using Object.getOwnPropertyNames()|48,941,360|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":46661142.622940235,"cycles":6,"stats":{"deviation":2.2159295999735717e-9,"mean":2.143110827955519e-8,"moe":4.855869834516925e-10,"rme":2.2658043490682744,"sem":2.477484609447411e-10,"variance":4.910343992039034e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":48941360.04910087,"cycles":5,"stats":{"deviation":1.6293825336493783e-9,"mean":2.0432615664884277e-8,"moe":3.4844921050273635e-10,"rme":1.7053578270039362,"sem":1.7778020944017162e-10,"variance":2.6548874409616675e-18}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|593,867,194|93|
|Length = 10_000 - Array.at|599,457,954|96|
|Length = 1_000_000 - Array.at|600,419,523|96|
|Length = 100 - Array[length - 1]|599,307,720|96|
|Length = 10_000 - Array[length - 1]|597,955,776|96|
|Length = 1_000_000 - Array[length - 1]|595,640,161|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":593867194.1736088,"cycles":7,"stats":{"deviation":1.2937390826564605e-10,"mean":1.6838781630151201e-9,"moe":2.629428071227221e-11,"rme":1.5615310709410337,"sem":1.3415449342996025e-11,"variance":1.67376081399278e-20}},{"name":"Length = 10_000 - Array.at","hz":599457953.7237695,"cycles":6,"stats":{"deviation":2.0676605898366853e-11,"mean":1.6681737122480495e-9,"moe":4.1361826151956145e-12,"rme":0.24794675667329924,"sem":2.110297252650824e-12,"variance":4.27522031476379e-22}},{"name":"Length = 1_000_000 - Array.at","hz":600419523.4301423,"cycles":8,"stats":{"deviation":2.2864308561969404e-11,"mean":1.6655021380502264e-9,"moe":4.5738142927005155e-12,"rme":0.2746207397881217,"sem":2.333578720765569e-12,"variance":5.227766060169473e-22}},{"name":"Length = 100 - Array[length - 1]","hz":599307719.7748835,"cycles":7,"stats":{"deviation":1.7165162045785173e-11,"mean":1.668591888613795e-9,"moe":3.4337475497562214e-12,"rme":0.20578714143269944,"sem":1.7519120151817457e-12,"variance":2.9464278805806384e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":597955775.703387,"cycles":8,"stats":{"deviation":2.1338566055960756e-11,"mean":1.6723644801719333e-9,"moe":4.268602225515135e-12,"rme":0.25524353549271067,"sem":2.1778582783240487e-12,"variance":4.553344013246006e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":595640161.4159248,"cycles":8,"stats":{"deviation":8.078702028096389e-11,"mean":1.6788659744212883e-9,"moe":1.599501396430692e-11,"rme":0.9527272699549746,"sem":8.160721410360673e-12,"variance":6.526542645876871e-21}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,371,517|86|
|Object.create({})|1,620,076|71|
|Cached Empty.prototype|983,853,682|93|
|Empty.prototype|1,573,765|73|
|Empty class|1,044,649|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","hz":46371516.74596679,"cycles":6,"stats":{"deviation":3.0100474066662245e-9,"mean":2.1564962075280317e-8,"moe":6.361802482958885e-10,"rme":2.9500643037306102,"sem":3.2458175933463697e-10,"variance":9.060385390378063e-18}},{"name":"Object.create({})","hz":1620075.9608723358,"cycles":4,"stats":{"deviation":9.302120149550844e-8,"mean":6.172550078834244e-7,"moe":2.1637587728572712e-8,"rme":3.50545357303269,"sem":1.1039585575802405e-8,"variance":8.652943927667982e-15}},{"name":"Cached Empty.prototype","hz":983853682.4054035,"cycles":7,"stats":{"deviation":3.514499179188684e-11,"mean":1.0164112996509e-9,"moe":7.1429571247772526e-12,"rme":0.7027624670476013,"sem":3.644365879988394e-12,"variance":1.2351704480517931e-21}},{"name":"Empty.prototype","hz":1573765.146303212,"cycles":3,"stats":{"deviation":5.647651738157547e-8,"mean":6.354188249428504e-7,"moe":1.2955749712604332e-8,"rme":2.0389307341924554,"sem":6.610076383981802e-9,"variance":3.1895970155513966e-15}},{"name":"Empty class","hz":1044648.7852363931,"cycles":4,"stats":{"deviation":1.5067966341961133e-7,"mean":9.572595250505274e-7,"moe":3.365622095592453e-8,"rme":3.5158930337254195,"sem":1.7171541304043127e-8,"variance":2.270436096824736e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|724,691,555|82|
|Using optional chain (obj.field?.field2) (undefined)|735,161,329|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|764,511,214|85|
|Using and operator (obj.field && obj.field.field2) (undefined)|751,846,461|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":724691555.0451272,"cycles":6,"stats":{"deviation":1.971118726001143e-10,"mean":1.3798974101991973e-9,"moe":4.266403520145465e-11,"rme":3.0918266014642213,"sem":2.1767364898701353e-11,"variance":3.88530903199237e-20}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":735161329.4871227,"cycles":6,"stats":{"deviation":5.88819299507956e-11,"mean":1.3602456493428989e-9,"moe":1.2302596252992285e-11,"rme":0.9044393017493102,"sem":6.2768348229552475e-12,"variance":3.4670816747304e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":764511213.7017301,"cycles":6,"stats":{"deviation":7.348580447579368e-11,"mean":1.3080252873702708e-9,"moe":1.5622483023944053e-11,"rme":1.194356345767014,"sem":7.970654604053089e-12,"variance":5.40016345945458e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":751846460.8680363,"cycles":5,"stats":{"deviation":5.186372477418371e-11,"mean":1.3300587979698151e-9,"moe":1.0836235609231663e-11,"rme":0.8147185391933015,"sem":5.528691637363094e-12,"variance":2.6898459474522775e-21}}]}-->
