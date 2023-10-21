## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,425,960|96|
|Using dot notation|715,431,223|98|
|Using define property (writable)|3,158,485|91|
|Using define property initialized (writable)|4,124,274|91|
|Using define property (getter)|1,669,905|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714425960.3726394,"samples":6},{"name":"Using dot notation","opsSec":715431223.2614391,"samples":6},{"name":"Using define property (writable)","opsSec":3158485.3118226384,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4124274.4847405734,"samples":6},{"name":"Using define property (getter)","opsSec":1669905.1233866913,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.025ms
new Array(length)|10|0.006ms
array.push|100|0.061ms
new Array(length)|100|0.015ms
array.push|1,000|0.084ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.644ms
new Array(length)|10,000|0.594ms
array.push|1,000,000|40.728ms
new Array(length)|1,000,000|7.997ms
array.push|100,000,000|1,990.905ms
new Array(length)|100,000,000|5,494.342ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.022ms
array.push|100|0.056ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.372ms
new Array(length)|10,000|0.261ms
array.push|1,000,000|32.965ms
new Array(length)|1,000,000|5.606ms
array.push|100,000,000|3,201.022ms
new Array(length)|100,000,000|5,411.836ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|75|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:32:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","hz":323.934106965316,"cycles":2,"stats":{"deviation":0.00026759375465345474,"mean":0.003087047576953887,"moe":0.000060562167902792825,"rme":1.961815177547472,"sem":0.00003089906525652695,"variance":7.160641752953332e-8}},{"name":"Array.from","hz":16.22187098905714,"cycles":1,"stats":{"deviation":0.0007044335011936811,"mean":0.06164517031818181,"moe":0.00020814679826831788,"rme":0.33765305082939556,"sem":0.00010619734605526422,"variance":4.96226557603988e-7}}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,656|82|
|new Blob (1024)|364|64|
|text (128)|2,809|75|
|text (1024)|340|78|
|arrayBuffer (128)|2,371|77|
|arrayBuffer (1024)|306|81|
|slice (0, 64)|32,790|60|
|slice (0, 512)|11,242|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Blob (128)","hz":2655.57372548208,"cycles":3,"stats":{"deviation":0.00004991655700925826,"mean":0.00037656646110190926,"moe":0.000010804228671191554,"rme":2.8691425783316458,"sem":0.000005512361566934467,"variance":2.49166266365853e-9}},{"name":"new Blob (1024)","hz":364.16318842676435,"cycles":2,"stats":{"deviation":0.00041053192218355625,"mean":0.0027460216512276794,"moe":0.00010058032093497128,"rme":3.662765036466638,"sem":0.00005131649027294453,"variance":1.685364591317255e-7}},{"name":"text (128)","hz":2808.5251319085164,"cycles":4,"stats":{"deviation":0.00002502051389845364,"mean":0.00035605876858237545,"moe":0.000005662675370337712,"rme":1.5903766091432834,"sem":0.000002889120086906996,"variance":6.260261157427116e-10}},{"name":"text (1024)","hz":339.74397610449176,"cycles":2,"stats":{"deviation":0.0003065526394560148,"mean":0.002943392879149797,"moe":0.00006803209262884099,"rme":2.3113493652431525,"sem":0.0000347102513412454,"variance":9.397452075744942e-8}},{"name":"arrayBuffer (128)","hz":2371.276135943174,"cycles":3,"stats":{"deviation":0.000028853402414781554,"mean":0.00042171385476464155,"moe":0.000006444774729140413,"rme":1.5282340516740294,"sem":0.0000032881503720104152,"variance":8.32518830909322e-10}},{"name":"arrayBuffer (1024)","hz":306.3957321996947,"cycles":2,"stats":{"deviation":0.00022324570442428963,"mean":0.0032637530321350753,"moe":0.00004861795340795641,"rme":1.4896333432481443,"sem":0.000024805078269365514,"variance":4.983864454389729e-8}},{"name":"slice (0, 64)","hz":32790.098662748394,"cycles":3,"stats":{"deviation":0.000022237941625949333,"mean":0.000030497011011926674,"moe":0.000005626975601320651,"rme":18.450908514018213,"sem":0.0000028709059190411483,"variance":4.945260477591301e-10}},{"name":"slice (0, 512)","hz":11241.691854025425,"cycles":4,"stats":{"deviation":0.00011638186097325491,"mean":0.00008895458201355342,"moe":0.00002786788228498042,"rme":31.32821452720038,"sem":0.000014218307288255315,"variance":1.3544737563598033e-8}}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|177,961|61|
|[True conditional] Using constructor name|144,976|94|
|[True conditional] Check if property is valid then instanceof |146,595|96|
|[False conditional] Using instanceof only|716,804,341|97|
|[False conditional] Using constructor name|715,438,387|96|
|[False conditional] Check if property is valid then instanceof |717,910,496|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":177960.78067782472,"cycles":3,"stats":{"deviation":0.0000011359136032553579,"mean":0.000005619215628247734,"moe":2.85060113922933e-7,"rme":5.0729520413834805,"sem":1.454388336341495e-7,"variance":1.2902997140605706e-12}},{"name":"[True conditional] Using constructor name","hz":144976.11047442746,"cycles":3,"stats":{"deviation":3.708543984899323e-7,"mean":0.0000068976881551556825,"moe":7.497139275072407e-8,"rme":1.0869060917850664,"sem":3.8250710587104115e-8,"variance":1.375329848793295e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":146594.757997094,"cycles":3,"stats":{"deviation":3.2316451855042284e-7,"mean":0.0000068215263196506874,"moe":6.464636749602587e-8,"rme":0.9476818598471117,"sem":3.298284055919687e-8,"variance":1.044353060499266e-13}},{"name":"[False conditional] Using instanceof only","hz":716804341.2763038,"cycles":8,"stats":{"deviation":3.272054029575534e-11,"mean":1.3950808364517617e-9,"moe":6.511644321637466e-12,"rme":0.46675749185969273,"sem":3.3222675110395237e-12,"variance":1.0706337572461488e-21}},{"name":"[False conditional] Using constructor name","hz":715438387.4842683,"cycles":7,"stats":{"deviation":4.829732614471628e-11,"mean":1.3977444004875807e-9,"moe":9.661477407952468e-12,"rme":0.6912191817461201,"sem":4.9293252081390146e-12,"variance":2.3326317127290946e-21}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":717910496.1002924,"cycles":6,"stats":{"deviation":4.2036999020836696e-11,"mean":1.3929312991410834e-9,"moe":8.498139368134008e-12,"rme":0.6100903449706511,"sem":4.335785391905106e-12,"variance":1.7671092866778256e-21}}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,770|90|
|crypto.verify('RSA-SHA256')|3,809|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":3770.236535879648,"cycles":3,"stats":{"deviation":0.000007336438712833305,"mean":0.00026523534809645206,"moe":0.000001515723941456765,"rme":0.57146377823878,"sem":7.73328541559574e-7,"variance":5.382333298715919e-11}},{"name":"crypto.verify('RSA-SHA256')","hz":3809.1723126132088,"cycles":3,"stats":{"deviation":0.00000763220514969182,"mean":0.0002625242225689626,"moe":0.0000015347735434023014,"rme":0.5846216887659313,"sem":7.830477262256641e-7,"variance":5.825055544698233e-11}}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|923,703|94|
|fromUnixToISOString(new Date())|1,541,002|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":923702.7223736314,"cycles":5,"stats":{"deviation":1.3670934349092217e-7,"mean":0.000001082599385904491,"moe":2.7636964601971168e-8,"rme":2.5528339440984453,"sem":1.410049214386284e-8,"variance":1.8689444597718942e-14}},{"name":"fromUnixToISOString(new Date())","hz":1541002.3851316215,"cycles":5,"stats":{"deviation":2.2595265730441942e-8,"mean":6.489282623106305e-7,"moe":4.496635216277545e-9,"rme":0.692932559335054,"sem":2.294201640957931e-9,"variance":5.105460334292841e-16}}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,171|78|
|Intl.DateTimeFormat().format(new Date())|7,933|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,558|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,634|86|
|Reusing Intl.DateTimeFormat()|400,958|76|
|Date.toLocaleDateString()|472,786|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,186|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":7170.6813640018945,"cycles":3,"stats":{"deviation":0.00007064339183252889,"mean":0.00013945676139232447,"moe":0.00001567762647646587,"rme":11.241926400657649,"sem":0.000007998789018605037,"variance":4.990488809604209e-9}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":7932.960404921135,"cycles":5,"stats":{"deviation":0.000011843237675881893,"mean":0.00012605634579742258,"moe":0.0000025479298699753843,"rme":2.0212626773030578,"sem":0.0000012999642193751962,"variance":1.4026227864742837e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":7558.415822818007,"cycles":3,"stats":{"deviation":0.000019935695079118443,"mean":0.0001323028559742787,"moe":0.0000046049106248498995,"rme":3.4805829329528235,"sem":0.0000023494441963519898,"variance":3.974319382875873e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":8634.197178571954,"cycles":3,"stats":{"deviation":0.000015312893463398103,"mean":0.00011581852711005544,"moe":0.0000032364142651369636,"rme":2.7943838916735593,"sem":0.0000016512317679270222,"variance":2.3448470622138033e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":400958.4976614997,"cycles":5,"stats":{"deviation":0.000002894533569517392,"mean":0.0000024940237102649655,"moe":6.507705122025329e-7,"rme":26.093196689513228,"sem":3.3202577153190456e-7,"variance":8.378324585063094e-12}},{"name":"Date.toLocaleDateString()","hz":472786.0514031677,"cycles":3,"stats":{"deviation":1.0948930614822468e-7,"mean":0.000002115121622205498,"moe":2.249609196600402e-8,"rme":1.0635838492609564,"sem":1.1477597941838785e-8,"variance":1.1987908160819673e-14}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":8185.511574847955,"cycles":3,"stats":{"deviation":0.00004063361330553611,"mean":0.0001221670742086239,"moe":0.00000890423310921663,"rme":7.288570318063712,"sem":0.000004542976076130934,"variance":1.6510905302638413e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|768,129|93|
|Using brackets {}|790,632|89|
|Using '' + |784,797|99|
|Using date.toString()|854,884|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":768128.7626582164,"cycles":4,"stats":{"deviation":2.96424459177325e-8,"mean":0.0000013018650630128222,"moe":6.024605767948147e-9,"rme":0.46276729740375633,"sem":3.073778453034769e-9,"variance":8.786745999856961e-16}},{"name":"Using brackets {}","hz":790631.9268113072,"cycles":3,"stats":{"deviation":3.123795730198027e-8,"mean":0.0000012648110531446585,"moe":6.489985029102343e-9,"rme":0.5131189368535723,"sem":3.311216851582828e-9,"variance":9.758099764003427e-16}},{"name":"Using '' + ","hz":784797.1348636753,"cycles":5,"stats":{"deviation":5.757734502196418e-8,"mean":0.0000012742146416904374,"moe":1.1342012173662947e-8,"rme":0.8901178657479608,"sem":5.786740904930075e-9,"variance":3.3151506597783038e-15}},{"name":"Using date.toString()","hz":854883.9750128763,"cycles":5,"stats":{"deviation":2.036170709575817e-8,"mean":0.000001169749380300336,"moe":4.160795235788321e-9,"rme":0.35569971703853576,"sem":2.1228547121368983e-9,"variance":4.1459911585344863e-16}}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,113,122|91|
|Using delete property (proto: null)|12,537,133|86|
|Using delete property (cached proto: null)|2,147,971|89|
|Using undefined assignment|730,630,695|85|
|Using undefined assignment (proto: null)|13,347,425|83|
|Using undefined property (cached proto: null)|618,736,014|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using delete property","hz":2113122.3805717905,"cycles":5,"stats":{"deviation":1.9560342319032244e-8,"mean":4.7323335798914285e-7,"moe":4.0189428098097825e-9,"rme":0.849251799764713,"sem":2.0504810254131544e-9,"variance":3.826069916377237e-16}},{"name":"Using delete property (proto: null)","hz":12537133.41758982,"cycles":6,"stats":{"deviation":4.836224465943139e-9,"mean":7.97630500284046e-8,"moe":1.0221468521540547e-9,"rme":1.2814791457824841,"sem":5.215034959969666e-10,"variance":2.3389067084987006e-17}},{"name":"Using delete property (cached proto: null)","hz":2147970.515616346,"cycles":6,"stats":{"deviation":2.5093025572033354e-8,"mean":4.6555573865177406e-7,"moe":5.213316566222944e-9,"rme":1.1198050272821136,"sem":2.6598553909300735e-9,"variance":6.296599323587199e-16}},{"name":"Using undefined assignment","hz":730630694.5048171,"cycles":8,"stats":{"deviation":5.226950992564449e-11,"mean":1.3686805215290704e-9,"moe":1.1112071743764315e-11,"rme":0.8118820695533876,"sem":5.6694243590634264e-12,"variance":2.732101667867048e-21}},{"name":"Using undefined assignment (proto: null)","hz":13347424.80428067,"cycles":5,"stats":{"deviation":4.417185180534823e-9,"mean":7.492081915901026e-8,"moe":9.503041626545099e-10,"rme":1.2684113352225979,"sem":4.848490625788316e-10,"variance":1.951152491913646e-17}},{"name":"Using undefined property (cached proto: null)","hz":618736013.8763041,"cycles":9,"stats":{"deviation":6.078699239827718e-11,"mean":1.6161981484399534e-9,"moe":1.2558722741873271e-11,"rme":0.7770534048684355,"sem":6.407511602996567e-12,"variance":3.695058444828208e-21}}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|144,447|59|
|NodeError|121,396|95|
|NodeError Range|120,613|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:53:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Error","hz":144447.46231342197,"cycles":3,"stats":{"deviation":0.0000015997119261132237,"mean":0.000006922932282674519,"moe":4.0819891694568486e-7,"rme":5.896329767189148,"sem":2.0826475354371677e-7,"variance":2.5590782465488803e-12}},{"name":"NodeError","hz":121395.84682374637,"cycles":3,"stats":{"deviation":3.6755354176438637e-7,"mean":0.000008237514100889232,"moe":7.391198750816745e-8,"rme":0.897260831398015,"sem":3.77101977082487e-8,"variance":1.3509560606354452e-13}},{"name":"NodeError Range","hz":120612.7049978869,"cycles":3,"stats":{"deviation":3.7624105182193233e-7,"mean":0.000008291000521193183,"moe":7.565897416967003e-8,"rme":0.9125433531969157,"sem":3.860151743350512e-8,"variance":1.4155732907607396e-13}}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,222,733|96|
|Function returning explicitly undefined|1,219,198|98|
|Function returning implicitly undefined|1,244,644|97|
|Function returning string|1,219,073|98|
|Function returning integer|1,256,713|97|
|Function returning float|1,230,152|97|
|Function returning functions|1,176,317|91|
|Function returning arrow functions|1,203,183|98|
|Function returning empty object|1,232,115|99|
|Function returning empty array|1,239,640|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Function returning null","hz":1222732.663274091,"cycles":6,"stats":{"deviation":3.461188046344372e-8,"mean":8.178402606194526e-7,"moe":6.923818104180835e-9,"rme":0.8465978550550399,"sem":3.53256025723512e-9,"variance":1.197982269215717e-15}},{"name":"Function returning explicitly undefined","hz":1219198.250485173,"cycles":6,"stats":{"deviation":9.264965894117252e-9,"mean":8.202111507312741e-7,"moe":1.83436965913387e-9,"rme":0.22364602791590976,"sem":9.35902887313199e-10,"variance":8.583959301915587e-17}},{"name":"Function returning implicitly undefined","hz":1244643.9933821133,"cycles":6,"stats":{"deviation":2.913016813813121e-8,"mean":8.034425950850942e-7,"moe":5.797132083714816e-9,"rme":0.721536562683838,"sem":2.957720450874906e-9,"variance":8.485666957557946e-16}},{"name":"Function returning string","hz":1219073.3215668993,"cycles":6,"stats":{"deviation":1.597837746158914e-8,"mean":8.202952048156382e-7,"moe":3.1635573355254326e-9,"rme":0.38566083489863184,"sem":1.6140598650639963e-9,"variance":2.553085463050198e-16}},{"name":"Function returning integer","hz":1256712.7963945381,"cycles":6,"stats":{"deviation":3.0244790479281173e-9,"mean":7.957267586269213e-7,"moe":6.018950677567955e-10,"rme":0.07564092337367224,"sem":3.0708932028407935e-10,"variance":9.147473511356172e-18}},{"name":"Function returning float","hz":1230152.003075861,"cycles":6,"stats":{"deviation":8.394171174319518e-9,"mean":8.129076711655218e-7,"moe":1.6705059442188163e-9,"rme":0.2054976233430909,"sem":8.522989511320491e-10,"variance":7.046210970377673e-17}},{"name":"Function returning functions","hz":1176317.4272967055,"cycles":6,"stats":{"deviation":2.2338775141305716e-8,"mean":8.501106731863179e-7,"moe":4.589810253307976e-9,"rme":0.539907378895128,"sem":2.341739925157131e-9,"variance":4.990208748138182e-16}},{"name":"Function returning arrow functions","hz":1203182.544878931,"cycles":5,"stats":{"deviation":5.295530290780423e-9,"mean":8.311290786724502e-7,"moe":1.0484615060050899e-9,"rme":0.12614905830028006,"sem":5.349293397985152e-10,"variance":2.804264106057299e-17}},{"name":"Function returning empty object","hz":1232114.8147604493,"cycles":6,"stats":{"deviation":4.627562729571202e-9,"mean":8.116126744198123e-7,"moe":9.115716049978266e-10,"rme":0.11231608792327827,"sem":4.650875535703197e-10,"variance":2.141433681611647e-17}},{"name":"Function returning empty array","hz":1239640.416040725,"cycles":6,"stats":{"deviation":1.0551308497301724e-8,"mean":8.06685541274856e-7,"moe":2.0997932014959065e-9,"rme":0.2602988517901872,"sem":1.0713230619877075e-9,"variance":1.1133011100523155e-16}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,236,078|97|
|using Array.includes (first item)|597,714,401|96|
|Using raw comparison|600,396,085|96|
|Using raw comparison (first item)|599,357,053|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":595236078.1609837,"cycles":9,"stats":{"deviation":2.6259628846978085e-11,"mean":1.6800056930177314e-9,"moe":5.225872235731826e-12,"rme":0.3110627694567384,"sem":2.666261344761136e-12,"variance":6.895681071810436e-22}},{"name":"using Array.includes (first item)","hz":597714401.0183437,"cycles":6,"stats":{"deviation":2.7026834437766786e-11,"mean":1.6730398302203701e-9,"moe":5.4064928883753945e-12,"rme":0.3231538658385234,"sem":2.758414738967038e-12,"variance":7.304497797264567e-22}},{"name":"Using raw comparison","hz":600396084.6851969,"cycles":8,"stats":{"deviation":7.141152030560656e-12,"mean":1.6655671572614031e-9,"moe":1.428527923125277e-12,"rme":0.08576825719078922,"sem":7.288407771047331e-13,"variance":5.099605232358058e-23}},{"name":"Using raw comparison (first item)","hz":599357052.869794,"cycles":6,"stats":{"deviation":2.3521427262491792e-11,"mean":1.6684545467712094e-9,"moe":4.705265409899364e-12,"rme":0.28201340090474664,"sem":2.400645617295594e-12,"variance":5.532575404646921e-22}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,978,805|92|
|Using Object.getOwnPropertyNames()|55,733,510|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","hz":63978804.88729479,"cycles":6,"stats":{"deviation":1.0272129962218972e-9,"mean":1.5630176302317654e-8,"moe":2.0990494169864064e-10,"rme":1.3429467309816319,"sem":1.0709435800951053e-10,"variance":1.0551665396071672e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":55733509.74397907,"cycles":8,"stats":{"deviation":1.0081052105745563e-9,"mean":1.7942526939244675e-8,"moe":2.0944351966234936e-10,"rme":1.167302244391482,"sem":1.0685893860323948e-10,"variance":1.0162761155875706e-18}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|742,760,460|92|
|Length = 10_000 - Array.at|721,549,372|92|
|Length = 1_000_000 - Array.at|746,605,158|92|
|Length = 100 - Array[length - 1]|749,501,467|92|
|Length = 10_000 - Array[length - 1]|712,313,472|89|
|Length = 1_000_000 - Array[length - 1]|720,404,465|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":742760459.5930015,"cycles":8,"stats":{"deviation":5.895112417356526e-11,"mean":1.3463290716201478e-9,"moe":1.204631593275568e-11,"rme":0.8947527158616105,"sem":6.146079557528408e-12,"variance":3.4752350413271095e-21}},{"name":"Length = 10_000 - Array.at","hz":721549372.0758866,"cycles":6,"stats":{"deviation":6.665245966028805e-11,"mean":1.3859065487411001e-9,"moe":1.362003860009722e-11,"rme":0.9827530299549487,"sem":6.948999285763888e-12,"variance":4.442550378766325e-21}},{"name":"Length = 1_000_000 - Array.at","hz":746605158.0791011,"cycles":6,"stats":{"deviation":5.701044519645763e-11,"mean":1.3393960504811465e-9,"moe":1.1649749583766888e-11,"rme":0.869776312957022,"sem":5.943749787636168e-12,"variance":3.2501908614982986e-21}},{"name":"Length = 100 - Array[length - 1]","hz":749501466.7592814,"cycles":9,"stats":{"deviation":6.388069370977898e-11,"mean":1.3342202041629515e-9,"moe":1.3053644510084947e-11,"rme":0.9783725706862909,"sem":6.660022709227014e-12,"variance":4.080743028842595e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":712313471.7910709,"cycles":5,"stats":{"deviation":8.159860497056998e-11,"mean":1.4038762982897937e-9,"moe":1.6952892262935002e-11,"rme":1.2075773544711215,"sem":8.649434828028062e-12,"variance":6.658332333143129e-21}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":720404464.6186366,"cycles":6,"stats":{"deviation":9.671476182362303e-11,"mean":1.3881091096921143e-9,"moe":2.009341872967865e-11,"rme":1.4475388562312235,"sem":1.0251744249836046e-11,"variance":9.353745154600132e-21}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,627,991|96|
|Object.create({})|1,322,354|72|
|Cached Empty.prototype|711,925,056|96|
|Empty.prototype|1,344,542|71|
|Empty class|951,005|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":48627991.31797011,"cycles":6,"stats":{"deviation":9.815997819680536e-10,"mean":2.056428762317512e-8,"moe":1.9636085212499773e-10,"rme":0.9548633812323604,"sem":1.0018410822703965e-10,"variance":9.635381319597303e-19}},{"name":"Object.create({})","hz":1322354.1990874482,"cycles":3,"stats":{"deviation":1.3607376152750757e-7,"mean":7.56227038633141e-7,"moe":3.143143530910284e-8,"rme":4.156349046433762,"sem":1.603644658627696e-8,"variance":1.8516068576244997e-14}},{"name":"Cached Empty.prototype","hz":711925055.5346539,"cycles":6,"stats":{"deviation":8.122958728863064e-11,"mean":1.4046422333724474e-9,"moe":1.6249301671377615e-11,"rme":1.1568284994794853,"sem":8.29046003641715e-12,"variance":6.598245851081265e-21}},{"name":"Empty.prototype","hz":1344542.487627896,"cycles":3,"stats":{"deviation":9.601832596842078e-8,"mean":7.437474153488791e-7,"moe":2.2334746469520864e-8,"rme":3.0030015578667952,"sem":1.1395278810980033e-8,"variance":9.21951892177791e-15}},{"name":"Empty class","hz":951004.5566284336,"cycles":3,"stats":{"deviation":1.0069023410244462e-7,"mean":0.0000010515196725715683,"moe":2.1928095426754608e-8,"rme":2.085371866902675,"sem":1.1187803789160514e-8,"variance":1.0138523243605101e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|678,165,746|89|
|Using optional chain (obj.field?.field2) (undefined)|685,522,885|81|
|Using and operator (obj.field && obj.field.field2) (Valid)|700,782,718|91|
|Using and operator (obj.field && obj.field.field2) (undefined)|703,384,841|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":678165746.249717,"cycles":7,"stats":{"deviation":8.92402436731499e-11,"mean":1.4745657761838296e-9,"moe":1.8540515944538818e-11,"rme":1.2573542831382944,"sem":9.459446910478988e-12,"variance":7.96382109084317e-21}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":685522885.4595311,"cycles":8,"stats":{"deviation":1.0746279929577959e-10,"mean":1.458740504818688e-9,"moe":2.3403009624414223e-11,"rme":1.6043298686165615,"sem":1.19403110328644e-11,"variance":1.1548253232485006e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":700782718.0004581,"cycles":8,"stats":{"deviation":7.808012154528801e-11,"mean":1.426975829046267e-9,"moe":1.6042640663204637e-11,"rme":1.124240532786522,"sem":8.185020746532979e-12,"variance":6.096505380526949e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":703384840.9795094,"cycles":5,"stats":{"deviation":7.642079355382855e-11,"mean":1.4216968318615378e-9,"moe":1.570170878217598e-11,"rme":1.1044343934857417,"sem":8.01107590927346e-12,"variance":5.840137687396883e-21}}]}-->
