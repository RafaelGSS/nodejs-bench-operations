## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|698,759,773|95|
|Using dot notation|706,187,680|94|
|Using define property (writable)|2,900,254|97|
|Using define property initialized (writable)|3,758,843|92|
|Using define property (getter)|1,492,693|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":698759772.592362,"samples":6},{"name":"Using dot notation","opsSec":706187680.0460653,"samples":6},{"name":"Using define property (writable)","opsSec":2900254.164579769,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3758843.3797920495,"samples":7},{"name":"Using define property (getter)","opsSec":1492692.9832559023,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.38ms
new Array(length)|10,000|0.208ms
array.push|1,000,000|28.99ms
new Array(length)|1,000,000|17.374ms
array.push|100,000,000|1,579.417ms
new Array(length)|100,000,000|4,341.191ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.612ms
new Array(length)|10,000|4.323ms
array.push|1,000,000|336.253ms
new Array(length)|1,000,000|4.379ms
array.push|100,000,000|2,143.975ms
new Array(length)|100,000,000|4,750.627ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|381|86|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":381.1493476840628,"samples":5},{"name":"Array.from","opsSec":16.064440387951755,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,378|91|
|new Blob (1024)|430|71|
|text (128)|31,171|78|
|text (1024)|22,674|83|
|arrayBuffer (128)|31,141|81|
|arrayBuffer (1024)|23,523|86|
|slice (0, 64)|54,420|75|
|slice (0, 512)|27,201|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3378.054237974091,"samples":3},{"name":"new Blob (1024)","opsSec":430.0173153812039,"samples":2},{"name":"text (128)","opsSec":31171.47618106299,"samples":4},{"name":"text (1024)","opsSec":22673.522626879192,"samples":4},{"name":"arrayBuffer (128)","opsSec":31141.42176477799,"samples":5},{"name":"arrayBuffer (1024)","opsSec":23523.115307515083,"samples":5},{"name":"slice (0, 64)","opsSec":54419.9762709935,"samples":4},{"name":"slice (0, 512)","opsSec":27200.766638190118,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,929|56|
|[True conditional] Using constructor name|147,195|95|
|[True conditional] Check if property is valid then instanceof |148,436|92|
|[False conditional] Using instanceof only|710,383,937|96|
|[False conditional] Using constructor name|711,270,795|96|
|[False conditional] Check if property is valid then instanceof |709,187,161|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":186928.61680602902,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":147195.09400614188,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148435.6472283005,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":710383936.9322736,"samples":10},{"name":"[False conditional] Using constructor name","opsSec":711270794.9951831,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":709187160.6412472,"samples":10}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,563|90|
|crypto.verify('RSA-SHA256')|4,768|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":4563.414230702299,"cycles":2,"stats":{"deviation":0.000026022399130805235,"mean":0.00021913417223272809,"moe":0.000005376283360441589,"rme":2.4534207995327124,"sem":0.000002743001714511015,"variance":6.771652565229331e-10}},{"name":"crypto.verify('RSA-SHA256')","hz":4767.852628315437,"cycles":3,"stats":{"deviation":0.0000029266642532783046,"mean":0.00020973802631003654,"moe":5.885280568662606e-7,"rme":0.28060150427671776,"sem":3.002694167685003e-7,"variance":8.565363651417057e-12}}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,206,550|87|
|fromUnixToISOString(new Date())|997,933|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":1206549.7543266083,"cycles":6,"stats":{"deviation":5.344942599125016e-8,"mean":8.288095840341979e-7,"moe":1.1231544718680446e-8,"rme":1.3551417521032207,"sem":5.730379958510431e-9,"variance":2.8568411387941278e-15}},{"name":"fromUnixToISOString(new Date())","hz":997932.5914203875,"cycles":6,"stats":{"deviation":5.9408369719685395e-8,"mean":0.0000010020716916126268,"moe":1.2629735144720317e-8,"rme":1.2603624321923887,"sem":6.443742420775672e-9,"variance":3.529354392750832e-15}}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,123|81|
|Intl.DateTimeFormat().format(new Date())|9,881|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,731|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,492|86|
|Reusing Intl.DateTimeFormat()|380,379|95|
|Date.toLocaleDateString()|463,088|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,395|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":10123.04153055097,"cycles":3,"stats":{"deviation":0.000011735420526098644,"mean":0.00009878453990157369,"moe":0.0000025557138034614828,"rme":2.587159697264297,"sem":0.0000013039356140109605,"variance":1.3772009492437737e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":9880.759695491915,"cycles":4,"stats":{"deviation":0.000010089470023916462,"mean":0.00010120679288013135,"moe":0.0000022391187381751028,"rme":2.212419418158127,"sem":0.0000011424075194770933,"variance":1.0179740536350884e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":9730.83213884513,"cycles":3,"stats":{"deviation":0.00014445560010920247,"mean":0.00010276613405014318,"moe":0.000032058496657616194,"rme":31.19558495989908,"sem":0.00001635637584572255,"variance":2.0867420402909815e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":11491.88132215141,"cycles":5,"stats":{"deviation":0.000010769504184022306,"mean":0.0000870179539769898,"moe":0.0000022761587842907503,"rme":2.615734661944173,"sem":0.0000011613055021891584,"variance":1.1598222036967394e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":380378.8167243656,"cycles":5,"stats":{"deviation":0.0000039893910704221,"mean":0.0000026289581754617826,"moe":8.022336597459594e-7,"rme":30.515269023062537,"sem":4.093028876254895e-7,"variance":1.591524111276359e-11}},{"name":"Date.toLocaleDateString()","hz":463087.66594120034,"cycles":3,"stats":{"deviation":9.538848826508791e-8,"mean":0.0000021594183424590993,"moe":1.9283599835243374e-8,"rme":0.8929997238646971,"sem":9.838571344511926e-9,"variance":9.098963693498815e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":11394.997872793681,"cycles":4,"stats":{"deviation":0.0000343193889961965,"mean":0.00008775780488626214,"moe":0.00000729602235166143,"rme":8.313815917703714,"sem":0.0000037224603835007294,"variance":1.1778204610722537e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|644,539|94|
|Using brackets {}|665,946|97|
|Using '' + |660,561|97|
|Using date.toString()|702,245|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","hz":644538.940090355,"cycles":6,"stats":{"deviation":1.941628477541916e-7,"mean":0.0000015514966401561626,"moe":3.925168253592579e-8,"rme":2.529923785846871,"sem":2.0026368640778464e-8,"variance":3.7699211448017385e-14}},{"name":"Using brackets {}","hz":665945.7004342015,"cycles":3,"stats":{"deviation":1.0857526688747741e-8,"mean":0.0000015016239302213269,"moe":2.1607330249061646e-9,"rme":0.14389308677224466,"sem":1.1024148086255942e-9,"variance":1.1788588579686948e-16}},{"name":"Using '' + ","hz":660561.1682225094,"cycles":6,"stats":{"deviation":8.689487196904858e-9,"mean":0.0000015138643446009392,"moe":1.7292761504615857e-9,"rme":0.1142292674128229,"sem":8.822837502355029e-10,"variance":7.550718774517345e-17}},{"name":"Using date.toString()","hz":702244.6644008401,"cycles":3,"stats":{"deviation":1.644922589066162e-8,"mean":0.0000014240051234183556,"moe":3.3253518893551687e-9,"rme":0.23352106215549198,"sem":1.6966081068138616e-9,"variance":2.7057703240201257e-16}}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,294,566|95|
|Using delete property (proto: null)|11,203,591|93|
|Using delete property (cached proto: null)|2,297,487|96|
|Using undefined assignment|709,978,429|97|
|Using undefined assignment (proto: null)|13,383,272|94|
|Using undefined property (cached proto: null)|706,016,536|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2294566.3238617526,"cycles":6,"stats":{"deviation":2.325125778379787e-8,"mean":4.3581220102498543e-7,"moe":4.6756362804058985e-9,"rme":1.07285575516456,"sem":2.3855287144928054e-9,"variance":5.406209885286211e-16}},{"name":"Using delete property (proto: null)","hz":11203591.424247188,"cycles":7,"stats":{"deviation":1.4443281043793776e-9,"mean":8.925709284933102e-8,"moe":2.935489012142637e-10,"rme":0.328880195224131,"sem":1.497698475582978e-10,"variance":2.0860836731001263e-18}},{"name":"Using delete property (cached proto: null)","hz":2297487.4271520292,"cycles":6,"stats":{"deviation":1.4583302469083408e-8,"mean":4.352580946393262e-7,"moe":2.91726806813716e-9,"rme":0.6702386708177214,"sem":1.4884020755801836e-9,"variance":2.126727109047742e-16}},{"name":"Using undefined assignment","hz":709978428.9415733,"cycles":7,"stats":{"deviation":1.126658256264904e-11,"mean":1.4084934967542424e-9,"moe":2.242138354232813e-12,"rme":0.15918698662078576,"sem":1.1439481399147005e-12,"variance":1.269358826409874e-22}},{"name":"Using undefined assignment (proto: null)","hz":13383271.627174323,"cycles":6,"stats":{"deviation":1.4242484524698486e-9,"mean":7.472014525727257e-8,"moe":2.8792402231040736e-10,"rme":0.38533653985687816,"sem":1.469000113828609e-10,"variance":2.0284836543627585e-18}},{"name":"Using undefined property (cached proto: null)","hz":706016536.4404961,"cycles":9,"stats":{"deviation":2.042241532609618e-11,"mean":1.4163974190203422e-9,"moe":4.043431942281392e-12,"rme":0.28547298152223766,"sem":2.0629754807558123e-12,"variance":4.1707504775156804e-22}}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,979|59|
|NodeError|138,670|89|
|NodeError Range|142,797|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:53:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Error","hz":181978.86544636983,"cycles":4,"stats":{"deviation":0.000001068512691768758,"mean":0.000005495143612128439,"moe":2.7265266727270415e-7,"rme":4.961702305121327,"sem":1.3910850371056334e-7,"variance":1.1417193724709166e-12}},{"name":"NodeError","hz":138670.45107948364,"cycles":3,"stats":{"deviation":9.350790224930584e-7,"mean":0.000007211341653650614,"moe":1.9427162917028802e-7,"rme":2.693973444899001,"sem":9.911817814810613e-8,"variance":8.743727783065735e-13}},{"name":"NodeError Range","hz":142796.70960174917,"cycles":3,"stats":{"deviation":3.660734064248518e-7,"mean":0.000007002962482741623,"moe":7.440168608084599e-8,"rme":1.062431596116707,"sem":3.796004391879898e-8,"variance":1.3400973889149472e-13}}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,450,173|91|
|Function returning explicitly undefined|1,448,794|91|
|Function returning implicitly undefined|1,482,957|91|
|Function returning string|1,424,356|89|
|Function returning integer|1,451,627|86|
|Function returning float|1,429,319|85|
|Function returning functions|1,423,102|91|
|Function returning arrow functions|1,330,269|88|
|Function returning empty object|1,418,782|91|
|Function returning empty array|1,390,542|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1450172.8290742391,"cycles":6,"stats":{"deviation":4.052021591622116e-8,"mean":6.895729805104539e-7,"moe":8.325438673431865e-9,"rme":1.2073324954334768,"sem":4.247672792567278e-9,"variance":1.6418878978971825e-15}},{"name":"Function returning explicitly undefined","hz":1448794.0559414302,"cycles":6,"stats":{"deviation":4.713434693752688e-8,"mean":6.902292260925915e-7,"moe":9.684403351946324e-9,"rme":1.4030706011639096,"sem":4.941022118339961e-9,"variance":2.2216466612271496e-15}},{"name":"Function returning implicitly undefined","hz":1482957.188009763,"cycles":7,"stats":{"deviation":5.066766362725891e-8,"mean":6.743283002944092e-7,"moe":1.0410372124546108e-8,"rme":1.5438136171952117,"sem":5.3114143492582184e-9,"variance":2.5672121374450552e-15}},{"name":"Function returning string","hz":1424355.5088058985,"cycles":6,"stats":{"deviation":5.989341691817223e-8,"mean":7.020719152048952e-7,"moe":1.2443431412081527e-8,"rme":1.7723870080246684,"sem":6.348689495959963e-9,"variance":3.587221390134e-15}},{"name":"Function returning integer","hz":1451627.3552932492,"cycles":5,"stats":{"deviation":6.159555079591456e-8,"mean":6.888820304698555e-7,"moe":1.3018357356260783e-8,"rme":1.8897803659331258,"sem":6.642019059316726e-9,"variance":3.79401187785209e-15}},{"name":"Function returning float","hz":1429318.6747250592,"cycles":6,"stats":{"deviation":5.826158469147705e-8,"mean":6.996340408078401e-7,"moe":1.2385937995555277e-8,"rme":1.7703452481033826,"sem":6.3193561201812635e-9,"variance":3.3944122507621527e-15}},{"name":"Function returning functions","hz":1423101.9077506994,"cycles":6,"stats":{"deviation":3.6597731183350034e-8,"mean":7.026903657100438e-7,"moe":7.519509944954427e-9,"rme":1.0701028948015001,"sem":3.836484665793075e-9,"variance":1.3393939277687514e-15}},{"name":"Function returning arrow functions","hz":1330268.8603705075,"cycles":4,"stats":{"deviation":9.433324545617566e-8,"mean":7.517277369940685e-7,"moe":1.9709677197258156e-8,"rme":2.6219169823467183,"sem":1.0055957753703142e-8,"variance":8.898761198295085e-15}},{"name":"Function returning empty object","hz":1418781.5733193888,"cycles":6,"stats":{"deviation":4.2596428786170325e-8,"mean":7.048301294612917e-7,"moe":8.752025317429285e-9,"rme":1.2417212249593446,"sem":4.465319039504738e-9,"variance":1.81445574533528e-15}},{"name":"Function returning empty array","hz":1390541.557664484,"cycles":4,"stats":{"deviation":7.317151863494269e-8,"mean":7.191442747526173e-7,"moe":1.5935130724943076e-8,"rme":2.215846149984952,"sem":8.130168737215855e-9,"variance":5.3540711393437644e-15}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|742,757,015|89|
|using Array.includes (first item)|722,995,501|90|
|Using raw comparison|743,726,148|91|
|Using raw comparison (first item)|744,527,516|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":742757015.2512379,"cycles":6,"stats":{"deviation":5.09828907922983e-11,"mean":1.3463353148697621e-9,"moe":1.0592184206660667e-11,"rme":0.7867419126330577,"sem":5.4041756156431975e-12,"variance":2.5992551535394143e-21}},{"name":"using Array.includes (first item)","hz":722995501.0934469,"cycles":8,"stats":{"deviation":1.1263693711125373e-10,"mean":1.3831344710826223e-9,"moe":2.327103230253161e-11,"rme":1.6824851660530629,"sem":1.1872975664556945e-11,"variance":1.2687079601804529e-20}},{"name":"Using raw comparison","hz":743726148.2740531,"cycles":6,"stats":{"deviation":4.436996551841514e-11,"mean":1.344580935228209e-9,"moe":9.116422963530477e-12,"rme":0.678012213670365,"sem":4.6512362058828965e-12,"variance":1.9686938401053485e-21}},{"name":"Using raw comparison (first item)","hz":744527516.0292417,"cycles":6,"stats":{"deviation":6.324550991620634e-11,"mean":1.3431337035510244e-9,"moe":1.3367079904782982e-11,"rme":0.9952158798072465,"sem":6.819938726930093e-12,"variance":3.999994524560955e-21}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,266,274|92|
|Using Object.getOwnPropertyNames()|49,908,825|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":49266274.44077764,"cycles":6,"stats":{"deviation":2.1932224130683034e-9,"mean":2.0297861191068696e-8,"moe":4.481721166306253e-10,"rme":2.207977049462859,"sem":2.2865924317889047e-10,"variance":4.810224553185151e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":49908825.29911372,"cycles":7,"stats":{"deviation":7.180545407450609e-10,"mean":2.003653650445181e-8,"moe":1.4516087502222302e-10,"rme":0.7244808751750609,"sem":7.406167092970563e-11,"variance":5.156023234846004e-19}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,808,446|87|
|Length = 10_000 - Array.at|16,485,716|86|
|Length = 1_000_000 - Array.at|16,126,841|88|
|Length = 100 - Array[length - 1]|727,295,557|88|
|Length = 10_000 - Array[length - 1]|730,199,334|88|
|Length = 1_000_000 - Array[length - 1]|763,655,631|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":16808445.566478442,"cycles":4,"stats":{"deviation":3.590538921542591e-9,"mean":5.949390120846917e-8,"moe":7.544945097833227e-10,"rme":1.2681879897899815,"sem":3.8494617846087893e-10,"variance":1.289196974711223e-17}},{"name":"Length = 10_000 - Array.at","hz":16485716.376048384,"cycles":4,"stats":{"deviation":4.206101203031009e-9,"mean":6.065857116484612e-8,"moe":8.889688919104184e-10,"rme":1.4655289019165172,"sem":4.5355555709715223e-10,"variance":1.76912873301389e-17}},{"name":"Length = 1_000_000 - Array.at","hz":16126841.091051692,"cycles":6,"stats":{"deviation":3.265970184752632e-9,"mean":6.200842399041623e-8,"moe":6.8238103932562e-10,"rme":1.100465058475097,"sem":3.4815359149266323e-10,"variance":1.0666561247693142e-17}},{"name":"Length = 100 - Array[length - 1]","hz":727295557.3289608,"cycles":7,"stats":{"deviation":6.544518611383294e-11,"mean":1.3749568382798371e-9,"moe":1.3673901350265523e-11,"rme":0.9944967703402594,"sem":6.976480280747716e-12,"variance":4.283072385474233e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":730199334.2121863,"cycles":8,"stats":{"deviation":7.047982213028385e-11,"mean":1.3694890602425736e-9,"moe":1.472582159545667e-11,"rme":1.0752785124729898,"sem":7.513174283396261e-12,"variance":4.96740532751645e-21}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":763655630.5246428,"cycles":9,"stats":{"deviation":7.359523224401852e-11,"mean":1.3094907704837914e-9,"moe":1.5738600385483247e-11,"rme":1.2018870800951595,"sem":8.0298981558588e-12,"variance":5.4162582090510236e-21}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,752,776|92|
|Object.create({})|1,037,857|79|
|Cached Empty.prototype|589,320,717|97|
|Empty.prototype|1,143,858|82|
|Empty class|673,783|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":56752776.02944954,"cycles":7,"stats":{"deviation":6.355225686989943e-10,"mean":1.7620283446242185e-8,"moe":1.2986530371167148e-10,"rme":0.7370216495544933,"sem":6.625780801615892e-11,"variance":4.0388893532576793e-19}},{"name":"Object.create({})","hz":1037857.145348493,"cycles":3,"stats":{"deviation":9.255412362032329e-8,"mean":9.63523741665062e-7,"moe":2.0409778834543302e-8,"rme":2.1182434798413206,"sem":1.0413152466603725e-8,"variance":8.566265799126086e-15}},{"name":"Cached Empty.prototype","hz":589320716.8884526,"cycles":6,"stats":{"deviation":2.1777986710769435e-11,"mean":1.6968689057460732e-9,"moe":4.333990277057691e-12,"rme":0.2554110257063222,"sem":2.2112195291110667e-12,"variance":4.742807051744501e-22}},{"name":"Empty.prototype","hz":1143858.3801171998,"cycles":3,"stats":{"deviation":9.891713323941461e-8,"mean":8.742340987155595e-7,"moe":2.1410197158011867e-8,"rme":2.449023343915333,"sem":1.0923569978577484e-8,"variance":9.784599248304101e-15}},{"name":"Empty class","hz":673782.6034086883,"cycles":3,"stats":{"deviation":1.0327800728444967e-7,"mean":0.0000014841582358181514,"moe":2.1702226651814604e-8,"rme":1.4622582773225066,"sem":1.1072564618272757e-8,"variance":1.0666346788646839e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|706,987,303|98|
|Using optional chain (obj.field?.field2) (undefined)|709,603,454|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|705,892,765|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|707,949,865|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":706987303.2261463,"cycles":9,"stats":{"deviation":2.0905448143561297e-11,"mean":1.41445255867647e-9,"moe":4.139067560895656e-12,"rme":0.29262682127484435,"sem":2.1117691637222736e-12,"variance":4.370377620831304e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":709603453.6784859,"cycles":6,"stats":{"deviation":1.9052862001818766e-11,"mean":1.4092377860002495e-9,"moe":3.914673961201718e-12,"rme":0.2777866162893978,"sem":1.9972826332661827e-12,"variance":3.630115504603494e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":705892764.5515935,"cycles":9,"stats":{"deviation":5.122232043843642e-11,"mean":1.4166457714511823e-9,"moe":1.0300386415027323e-11,"rme":0.7270968242453314,"sem":5.255299191340471e-12,"variance":2.6237261110978615e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":707949864.703982,"cycles":6,"stats":{"deviation":9.896230859249327e-12,"mean":1.4125294033612595e-9,"moe":1.9900504512500673e-12,"rme":0.14088559477165832,"sem":1.0153318628826873e-12,"variance":9.793538521955867e-23}}]}-->
