## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|711,412,612|96|
|Using dot notation|716,106,161|94|
|Using define property (writable)|3,114,959|97|
|Using define property initialized (writable)|4,073,657|91|
|Using define property (getter)|1,641,235|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Directly in the object","hz":711412611.8222791,"cycles":8,"stats":{"deviation":4.5040286943431765e-11,"mean":1.4056540232517189e-9,"moe":9.009933871862355e-12,"rme":0.6409780588127618,"sem":4.596905036664467e-12,"variance":2.0286274479466697e-21}},{"name":"Using dot notation","hz":716106160.5726012,"cycles":6,"stats":{"deviation":2.130050940742992e-11,"mean":1.3964409958439628e-9,"moe":4.30608039995587e-12,"rme":0.3083610702329329,"sem":2.196979795895852e-12,"variance":4.537117010160105e-22}},{"name":"Using define property (writable)","hz":3114958.535576531,"cycles":5,"stats":{"deviation":3.4959592260491013e-9,"mean":3.210315606383875e-7,"moe":6.957233235519602e-10,"rme":0.21671493050978513,"sem":3.54960879363245e-10,"variance":1.2221730910197831e-17}},{"name":"Using define property initialized (writable)","hz":4073656.9358443236,"cycles":4,"stats":{"deviation":4.592429165870841e-9,"mean":2.454796797444937e-7,"moe":9.435780762271704e-10,"rme":0.3843813374733457,"sem":4.81417385830189e-10,"variance":2.1090405643541148e-17}},{"name":"Using define property (getter)","hz":1641235.4865306106,"cycles":4,"stats":{"deviation":4.3945586255913914e-8,"mean":6.092970863760014e-7,"moe":9.181845861019552e-9,"rme":1.5069571258959495,"sem":4.684615235214057e-9,"variance":1.93121455137597e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.025ms
new Array(length)|10|0.011ms
array.push|100|0.046ms
new Array(length)|100|0.018ms
array.push|1,000|0.083ms
new Array(length)|1,000|0.335ms
array.push|10,000|0.573ms
new Array(length)|10,000|0.591ms
array.push|1,000,000|44.893ms
new Array(length)|1,000,000|12.764ms
array.push|100,000,000|1,973.037ms
new Array(length)|100,000,000|6,234.296ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.022ms
array.push|100|0.022ms
new Array(length)|100|0.014ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.422ms
new Array(length)|10,000|0.303ms
array.push|1,000,000|36.607ms
new Array(length)|1,000,000|4.827ms
array.push|100,000,000|3,302.997ms
new Array(length)|100,000,000|5,828.389ms

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
