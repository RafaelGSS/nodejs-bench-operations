## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|708,220,357|97|
|Using dot notation|710,056,945|96|
|Using define property (writable)|3,156,237|96|
|Using define property initialized (writable)|4,149,693|93|
|Using define property (getter)|1,660,135|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":708220356.5698638,"samples":8},{"name":"Using dot notation","opsSec":710056945.3565415,"samples":6},{"name":"Using define property (writable)","opsSec":3156236.9569961936,"samples":6},{"name":"Using define property initialized (writable)","opsSec":4149693.441426524,"samples":6},{"name":"Using define property (getter)","opsSec":1660134.9350095561,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.003ms
array.push|100|0.032ms
new Array(length)|100|0.01ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.525ms
new Array(length)|10,000|0.51ms
array.push|1,000,000|39.662ms
new Array(length)|1,000,000|10.686ms
array.push|100,000,000|1,790.732ms
new Array(length)|100,000,000|4,752.299ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.026ms
new Array(length)|100|0.015ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.68ms
new Array(length)|10,000|2.82ms
array.push|1,000,000|199.142ms
new Array(length)|1,000,000|4.394ms
array.push|100,000,000|3,301.523ms
new Array(length)|100,000,000|5,007.311ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|292|77|
|Array.from|13|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":292.15671329797084,"samples":3},{"name":"Array.from","opsSec":13.145741489485331,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,212|82|
|new Blob (1024)|384|66|
|text (128)|3,732|83|
|text (1024)|472|86|
|arrayBuffer (128)|3,752|82|
|arrayBuffer (1024)|470|87|
|slice (0, 64)|47,434|61|
|slice (0, 512)|12,773|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3211.647928928569,"samples":3},{"name":"new Blob (1024)","opsSec":383.8977430042747,"samples":2},{"name":"text (128)","opsSec":3731.8518875094906,"samples":4},{"name":"text (1024)","opsSec":472.3680861224588,"samples":3},{"name":"arrayBuffer (128)","opsSec":3751.73774989339,"samples":3},{"name":"arrayBuffer (1024)","opsSec":469.94642432975235,"samples":2},{"name":"slice (0, 64)","opsSec":47434.04361033607,"samples":3},{"name":"slice (0, 512)","opsSec":12773.429012038345,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,426|56|
|[True conditional] Using constructor name|130,901|96|
|[True conditional] Check if property is valid then instanceof |131,601|98|
|[False conditional] Using instanceof only|597,454,542|95|
|[False conditional] Using constructor name|596,862,933|97|
|[False conditional] Check if property is valid then instanceof |598,456,639|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":165426.23394401622,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":130900.97325429757,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":131600.98633036827,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":597454542.1131063,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":596862932.9248109,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598456638.6070374,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,596|92|
|crypto.verify('RSA-SHA256')|4,587|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4595.684067460992,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":4586.911680059391,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|833,249|91|
|fromUnixToISOString(new Date())|1,397,593|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:38:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":833248.7232454087,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1397592.543552565,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,665|81|
|Intl.DateTimeFormat().format(new Date())|7,942|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,595|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,511|78|
|Reusing Intl.DateTimeFormat()|432,060|90|
|Date.toLocaleDateString()|495,581|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,976|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7665.355496494934,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7942.493962029965,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8595.41907732375,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8510.697249872626,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":432060.0389791531,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":495581.2962201482,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8975.726530300342,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|611,011|90|
|Using brackets {}|650,779|83|
|Using '' + |614,205|90|
|Using date.toString()|715,967|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":611011.174286168,"samples":3},{"name":"Using brackets {}","opsSec":650779.4278579067,"samples":7},{"name":"Using '' + ","opsSec":614205.2094200691,"samples":6},{"name":"Using date.toString()","opsSec":715966.7825746011,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,330,876|85|
|Using delete property (proto: null)|13,728,521|87|
|Using delete property (cached proto: null)|2,413,934|90|
|Using undefined assignment|708,329,311|88|
|Using undefined assignment (proto: null)|14,330,659|91|
|Using undefined property (cached proto: null)|666,199,395|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2330875.977329578,"cycles":5,"stats":{"deviation":7.153584173965259e-8,"mean":4.2902325551686937e-7,"moe":1.5207936841045254e-8,"rme":3.5447814647537843,"sem":7.759151449512885e-9,"variance":5.117376653400621e-15}},{"name":"Using delete property (proto: null)","hz":13728521.256147826,"cycles":5,"stats":{"deviation":4.515992337554203e-9,"mean":7.284105704772725e-8,"moe":9.489637904953657e-10,"rme":1.3027869569130242,"sem":4.841651992323295e-10,"variance":2.0394186792848276e-17}},{"name":"Using delete property (cached proto: null)","hz":2413934.1382210418,"cycles":6,"stats":{"deviation":3.065561854802817e-8,"mean":4.142615095277429e-7,"moe":6.3335164092807625e-9,"rme":1.5288691475345986,"sem":3.2313859231024298e-9,"variance":9.397669485622087e-16}},{"name":"Using undefined assignment","hz":708329311.2270141,"cycles":6,"stats":{"deviation":8.78114059889686e-11,"mean":1.4117727223058651e-9,"moe":1.8347025567820615e-11,"rme":1.2995735983518792,"sem":9.360727330520722e-12,"variance":7.710843021759471e-21}},{"name":"Using undefined assignment (proto: null)","hz":14330658.977423292,"cycles":5,"stats":{"deviation":4.400756769576607e-9,"mean":6.97804617062909e-8,"moe":9.041963319631039e-10,"rme":1.2957729282000265,"sem":4.61324659164849e-10,"variance":1.9366660144974332e-17}},{"name":"Using undefined property (cached proto: null)","hz":666199395.2692924,"cycles":5,"stats":{"deviation":1.0137591193627719e-10,"mean":1.5010520980670933e-9,"moe":2.1061817340288392e-11,"rme":1.403136997537242,"sem":1.0745825173616527e-11,"variance":1.027707552091183e-20}}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|159,399|53|
|NodeError|128,081|94|
|NodeError Range|127,871|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:53:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Error","hz":159399.44549905692,"cycles":3,"stats":{"deviation":0.000001433965699192173,"mean":0.000006273547545094293,"moe":3.860618607632616e-7,"rme":6.153804653399801,"sem":1.9697033712411307e-7,"variance":2.0562576264596977e-12}},{"name":"NodeError","hz":128080.62681425577,"cycles":3,"stats":{"deviation":4.211195401502704e-7,"mean":0.000007807582027609947,"moe":8.513292162144147e-8,"rme":1.090387796380313,"sem":4.343516409257218e-8,"variance":1.7734166709637521e-13}},{"name":"NodeError Range","hz":127870.86817850516,"cycles":3,"stats":{"deviation":4.45766984864937e-7,"mean":0.000007820389540204107,"moe":9.059881076047138e-8,"rme":1.1584948587881572,"sem":4.622388304105683e-8,"variance":1.98708204795577e-13}}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,420,387|94|
|Function returning explicitly undefined|1,435,936|95|
|Function returning implicitly undefined|1,447,725|88|
|Function returning string|1,441,499|97|
|Function returning integer|1,457,136|95|
|Function returning float|1,427,268|95|
|Function returning functions|1,374,754|95|
|Function returning arrow functions|1,432,928|95|
|Function returning empty object|1,454,594|95|
|Function returning empty array|1,430,101|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1420387.092383138,"cycles":8,"stats":{"deviation":6.440421727519995e-8,"mean":7.040334324090423e-7,"moe":1.3019864097076533e-8,"rme":1.849324690807015,"sem":6.642787804630884e-9,"variance":4.147903202831165e-15}},{"name":"Function returning explicitly undefined","hz":1435936.1433903284,"cycles":6,"stats":{"deviation":8.518340631536046e-9,"mean":6.964097983068676e-7,"moe":1.7129680843940993e-9,"rme":0.24597127848555816,"sem":8.739633083643364e-10,"variance":7.256212711487792e-17}},{"name":"Function returning implicitly undefined","hz":1447725.2774403591,"cycles":5,"stats":{"deviation":1.945222641301055e-8,"mean":6.907387855850962e-7,"moe":4.064284033846067e-9,"rme":0.588396673049622,"sem":2.0736143029826875e-9,"variance":3.7838911242302525e-16}},{"name":"Function returning string","hz":1441498.736576469,"cycles":6,"stats":{"deviation":1.8272637562478566e-8,"mean":6.937224255742188e-7,"moe":3.63639828528407e-9,"rme":0.5241863533925826,"sem":1.8553052475939134e-9,"variance":3.338892834897026e-16}},{"name":"Function returning integer","hz":1457135.602939639,"cycles":6,"stats":{"deviation":8.693733180667046e-9,"mean":6.862779263526268e-7,"moe":1.7482380802650852e-9,"rme":0.2547419949169102,"sem":8.919582042168803e-10,"variance":7.558099661663115e-17}},{"name":"Function returning float","hz":1427268.245207922,"cycles":5,"stats":{"deviation":1.6824999267379992e-8,"mean":7.006391428923871e-7,"moe":3.3833686643473684e-9,"rme":0.482897465645454,"sem":1.726208502218045e-9,"variance":2.830806003473373e-16}},{"name":"Function returning functions","hz":1374753.9347481478,"cycles":5,"stats":{"deviation":1.7984419046119646e-8,"mean":7.274029007839851e-7,"moe":3.616518424764752e-9,"rme":0.49718229345345166,"sem":1.8451624616146694e-9,"variance":3.23439328426431e-16}},{"name":"Function returning arrow functions","hz":1432927.8347328359,"cycles":6,"stats":{"deviation":7.327880439164518e-9,"mean":6.978718507386985e-7,"moe":1.4735763526612055e-9,"rme":0.2111528572332331,"sem":7.518246697251048e-10,"variance":5.3697831730689975e-17}},{"name":"Function returning empty object","hz":1454593.988796746,"cycles":7,"stats":{"deviation":8.99966176008702e-9,"mean":6.87477060748209e-7,"moe":1.8097577958198201e-9,"rme":0.2632462810977559,"sem":9.233458141937858e-10,"variance":8.099391179597259e-17}},{"name":"Function returning empty array","hz":1430100.8548295605,"cycles":5,"stats":{"deviation":1.363094020125911e-8,"mean":6.992513826020893e-7,"moe":2.741069714751584e-9,"rme":0.392000614221366,"sem":1.3985049565059101e-9,"variance":1.8580253077030176e-16}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|701,231,747|95|
|using Array.includes (first item)|716,253,063|96|
|Using raw comparison|721,043,607|97|
|Using raw comparison (first item)|717,998,151|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":701231747.4181998,"cycles":9,"stats":{"deviation":1.55052372953199e-10,"mean":1.4260620738889922e-9,"moe":3.117975410552551e-11,"rme":2.1864233455487443,"sem":1.5908037808941585e-11,"variance":2.4041238358417916e-20}},{"name":"using Array.includes (first item)","hz":716253063.154732,"cycles":6,"stats":{"deviation":3.2256607810163336e-11,"mean":1.396154587591579e-9,"moe":6.4526654473846124e-12,"rme":0.46217413922019274,"sem":3.292176248665619e-12,"variance":1.0404887474186905e-21}},{"name":"Using raw comparison","hz":721043606.5181025,"cycles":8,"stats":{"deviation":7.399504913345165e-12,"mean":1.3868786727462565e-9,"moe":1.4725595517798678e-12,"rme":0.10617796500280363,"sem":7.513058937652386e-13,"variance":5.475267296261924e-23}},{"name":"Using raw comparison (first item)","hz":717998150.6466945,"cycles":6,"stats":{"deviation":2.4847417758610095e-11,"mean":1.3927612475036446e-9,"moe":5.023118299816105e-12,"rme":0.3606589649747532,"sem":2.5628154590898498e-12,"variance":6.173941692708923e-22}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,629,434|96|
|Using Object.getOwnPropertyNames()|57,755,421|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":58629433.98346199,"cycles":6,"stats":{"deviation":7.991309742113638e-10,"mean":1.705627927914291e-8,"moe":1.5985948849847025e-10,"rme":0.9372471327551063,"sem":8.156096351962768e-11,"variance":6.386103139440034e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":57755420.81405235,"cycles":9,"stats":{"deviation":7.633413949712142e-10,"mean":1.7314392067535454e-8,"moe":1.5770796610608353e-10,"rme":0.9108489948185158,"sem":8.046324801330793e-11,"variance":5.826900852765992e-19}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|681,416,518|86|
|Length = 10_000 - Array.at|694,261,899|88|
|Length = 1_000_000 - Array.at|689,198,172|83|
|Length = 100 - Array[length - 1]|794,178,333|82|
|Length = 10_000 - Array[length - 1]|772,995,698|82|
|Length = 1_000_000 - Array[length - 1]|828,099,869|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":681416517.8680232,"cycles":6,"stats":{"deviation":1.0467746995948156e-10,"mean":1.4675311997553898e-9,"moe":2.2123817280195002e-11,"rme":1.5075534533018877,"sem":1.1287661877650512e-11,"variance":1.0957372717118163e-20}},{"name":"Length = 10_000 - Array.at","hz":694261898.9709543,"cycles":7,"stats":{"deviation":8.365629030399602e-11,"mean":1.440378625821488e-9,"moe":1.7478869400055564e-11,"rme":1.2134913061547883,"sem":8.91779051023243e-12,"variance":6.998374907426459e-21}},{"name":"Length = 1_000_000 - Array.at","hz":689198171.883162,"cycles":7,"stats":{"deviation":1.0009841635790178e-10,"mean":1.4509614807416052e-9,"moe":2.1534968051423406e-11,"rme":1.484186061260331,"sem":1.0987228597665003e-11,"variance":1.0019692957359858e-20}},{"name":"Length = 100 - Array[length - 1]","hz":794178332.6669537,"cycles":7,"stats":{"deviation":8.287962957324661e-11,"mean":1.2591630353876195e-9,"moe":1.7938946989611546e-11,"rme":1.4246723010010565,"sem":9.152523974291605e-12,"variance":6.869032998198574e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":772995697.695809,"cycles":6,"stats":{"deviation":1.044767685368483e-10,"mean":1.2936682610017867e-9,"moe":2.261355681822963e-11,"rme":1.748018213009123,"sem":1.1537528988892669e-11,"variance":1.0915395163902174e-20}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":828099869.0872915,"cycles":8,"stats":{"deviation":7.825185672719684e-11,"mean":1.2075838160706052e-9,"moe":1.6635706882890887e-11,"rme":1.3776026691896497,"sem":8.48760555249535e-12,"variance":6.12335308125374e-21}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,248,340|91|
|Object.create({})|1,585,919|78|
|Cached Empty.prototype|717,546,525|98|
|Empty.prototype|1,428,725|70|
|Empty class|989,923|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":49248340.44906952,"cycles":8,"stats":{"deviation":2.5880444545465675e-9,"mean":2.0305252743169208e-8,"moe":5.317495206588293e-10,"rme":2.6187781427035555,"sem":2.7130077584634145e-10,"variance":6.69797409870924e-18}},{"name":"Object.create({})","hz":1585918.5042472777,"cycles":3,"stats":{"deviation":7.70588333048756e-8,"mean":6.3054942440099e-7,"moe":1.7101381656901117e-8,"rme":2.712139761787445,"sem":8.725194722908734e-9,"variance":5.9380637903086065e-15}},{"name":"Cached Empty.prototype","hz":717546525.420857,"cycles":6,"stats":{"deviation":2.5179181655652585e-11,"mean":1.3936378542331842e-9,"moe":4.985223626163162e-12,"rme":0.3577129891399342,"sem":2.5434814419199806e-12,"variance":6.339911888483516e-22}},{"name":"Empty.prototype","hz":1428724.8454566433,"cycles":3,"stats":{"deviation":6.288774007134127e-8,"mean":6.9992483379848e-7,"moe":1.47323843174918e-8,"rme":2.1048523507216346,"sem":7.516522610965204e-9,"variance":3.9548678512805815e-15}},{"name":"Empty class","hz":989923.2681118546,"cycles":6,"stats":{"deviation":1.0128329589002468e-7,"mean":0.0000010101793060257746,"moe":2.1406451003011323e-8,"rme":2.1190743935577254,"sem":1.0921658675005777e-8,"variance":1.025830602634629e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|762,499,066|87|
|Using optional chain (obj.field?.field2) (undefined)|762,518,368|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|774,204,544|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|778,052,312|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":762499066.4209808,"cycles":6,"stats":{"deviation":5.508097728346813e-11,"mean":1.3114770155638373e-9,"moe":1.1574389210637513e-11,"rme":0.8825460967504176,"sem":5.9053006176722e-12,"variance":3.033914058501932e-21}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":762518367.7860674,"cycles":8,"stats":{"deviation":6.395204802304401e-11,"mean":1.3114438185973778e-9,"moe":1.328665092399235e-11,"rme":1.0131315375905892,"sem":6.778903532649158e-12,"variance":4.0898644463417275e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":774204543.703185,"cycles":6,"stats":{"deviation":5.2957295305947277e-11,"mean":1.2916483223112944e-9,"moe":1.094109056341054e-11,"rme":0.8470642027260481,"sem":5.582189062964562e-12,"variance":2.8044751261213054e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":778052311.7397103,"cycles":6,"stats":{"deviation":6.773538679283853e-11,"mean":1.2852606243968594e-9,"moe":1.4233511617606968e-11,"rme":1.1074416618253127,"sem":7.261995723268861e-12,"variance":4.588082623975444e-21}}]}-->
