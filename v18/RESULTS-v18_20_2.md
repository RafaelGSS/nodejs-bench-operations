## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,939,761|8469881|
|Using dot notation|16,991,364|8495683|
|Using define property (writable)|3,294,047|1647024|
|Using define property initialized (writable)|4,085,194|2042598|
|Using define property (getter)|2,052,606|1026304|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:25:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16939761.44265197,"samples":8469881},{"name":"Using dot notation","opsSec":16991364.290453974,"samples":8495683},{"name":"Using define property (writable)","opsSec":3294047.1046872856,"samples":1647024},{"name":"Using define property initialized (writable)","opsSec":4085194.926667021,"samples":2042598},{"name":"Using define property (getter)","opsSec":2052606.4104953716,"samples":1026304}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.379ms
new Array(length)|10,000|0.156ms
array.push|1,000,000|25.94ms
new Array(length)|1,000,000|15.262ms
array.push|100,000,000|2,199.461ms
new Array(length)|100,000,000|4,236.664ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.459ms
new Array(length)|10,000|3.08ms
array.push|1,000,000|253.067ms
new Array(length)|1,000,000|4.575ms
array.push|100,000,000|2,600.14ms
new Array(length)|100,000,000|4,630.325ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|231|116|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:31:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":231.96739252687456,"samples":116},{"name":"Array.from","opsSec":22.498646953861485,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|308,926|154464|
|[True conditional] Using constructor name|303,606|151804|
|[True conditional] Check if property is valid then instanceof |308,166|154084|
|[False conditional] Using instanceof only|12,323,552|6161777|
|[False conditional] Using constructor name|16,171,625|8085813|
|[False conditional] Check if property is valid then instanceof |16,168,769|8084385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:46:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":308926.48346798547,"samples":154464},{"name":"[True conditional] Using constructor name","opsSec":303606.8303949438,"samples":151804},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":308166.95830365777,"samples":154084},{"name":"[False conditional] Using instanceof only","opsSec":12323552.442773154,"samples":6161777},{"name":"[False conditional] Using constructor name","opsSec":16171625.637572095,"samples":8085813},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16168769.722444674,"samples":8084385}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,812|3407|
|crypto.verify('RSA-SHA256')|6,751|3376|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:54:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6812.557885701662,"samples":3407},{"name":"crypto.verify('RSA-SHA256')","opsSec":6751.52851540845,"samples":3376}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,071,722|535862|
|Using brackets {}|1,086,656|543329|
|Using '' + |1,074,277|537139|
|Using date.toString()|1,171,643|585822|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:08:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1071722.7423373847,"samples":535862},{"name":"Using brackets {}","opsSec":1086656.1206408741,"samples":543329},{"name":"Using '' + ","opsSec":1074277.9457009018,"samples":537139},{"name":"Using date.toString()","opsSec":1171643.0066617653,"samples":585822}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,873,402|1436702|
|Using delete property (proto: null)|8,286,215|4143108|
|Using delete property (cached proto: null)|2,904,058|1452030|
|Using undefined assignment|15,246,729|7623365|
|Using undefined assignment (proto: null)|9,032,064|4516033|
|Using undefined property (cached proto: null)|15,279,532|7639767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:19:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2873402.9586895714,"samples":1436702},{"name":"Using delete property (proto: null)","opsSec":8286215.988146473,"samples":4143108},{"name":"Using delete property (cached proto: null)","opsSec":2904058.057177804,"samples":1452030},{"name":"Using undefined assignment","opsSec":15246729.171196401,"samples":7623365},{"name":"Using undefined assignment (proto: null)","opsSec":9032064.729486898,"samples":4516033},{"name":"Using undefined property (cached proto: null)","opsSec":15279532.484543439,"samples":7639767}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|299,157|149579|
|NodeError|296,979|148490|
|NodeError Range|305,280|152641|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:26:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":299157.8406604252,"samples":149579},{"name":"NodeError","opsSec":296979.2018819896,"samples":148490},{"name":"NodeError Range","opsSec":305280.6178209943,"samples":152641}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,532,370|766186|
|Function returning explicitly undefined|1,455,669|727835|
|Function returning implicitly undefined|1,481,147|740574|
|Function returning string|1,466,044|733023|
|Function returning integer|1,482,180|741091|
|Function returning float|1,453,744|726873|
|Function returning functions|1,420,435|710218|
|Function returning arrow functions|1,454,915|727458|
|Function returning empty object|1,445,977|722989|
|Function returning empty array|1,478,348|739175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:33:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1532370.3442539214,"samples":766186},{"name":"Function returning explicitly undefined","opsSec":1455669.8702000305,"samples":727835},{"name":"Function returning implicitly undefined","opsSec":1481147.7535130663,"samples":740574},{"name":"Function returning string","opsSec":1466044.0579994235,"samples":733023},{"name":"Function returning integer","opsSec":1482180.2005926177,"samples":741091},{"name":"Function returning float","opsSec":1453744.2905705355,"samples":726873},{"name":"Function returning functions","opsSec":1420435.304396125,"samples":710218},{"name":"Function returning arrow functions","opsSec":1454915.9389492974,"samples":727458},{"name":"Function returning empty object","opsSec":1445977.7324755858,"samples":722989},{"name":"Function returning empty array","opsSec":1478348.4315274905,"samples":739175}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|17,167,493|8583747|
|using Array.includes (first item)|16,400,697|8200349|
|Using raw comparison|17,119,705|8559853|
|Using raw comparison (first item)|17,206,260|8603131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:38:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":17167493.598881155,"samples":8583747},{"name":"using Array.includes (first item)","opsSec":16400697.163210584,"samples":8200349},{"name":"Using raw comparison","opsSec":17119705.78775389,"samples":8559853},{"name":"Using raw comparison (first item)","opsSec":17206260.597016066,"samples":8603131}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,922,457|6961229|
|Using Object.getOwnPropertyNames()|13,587,074|6793538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:46:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13922457.75436643,"samples":6961229},{"name":"Using Object.getOwnPropertyNames()","opsSec":13587074.652405009,"samples":6793538}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,760,348|4380175|
|Length = 10_000 - Array.at|9,220,929|4610465|
|Length = 1_000_000 - Array.at|9,219,635|4609818|
|Length = 100 - Array[length - 1]|16,605,450|8302726|
|Length = 10_000 - Array[length - 1]|16,361,477|8180739|
|Length = 1_000_000 - Array[length - 1]|16,408,726|8204364|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:53:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8760348.136942258,"samples":4380175},{"name":"Length = 10_000 - Array.at","opsSec":9220929.142608078,"samples":4610465},{"name":"Length = 1_000_000 - Array.at","opsSec":9219635.18669104,"samples":4609818},{"name":"Length = 100 - Array[length - 1]","opsSec":16605450.15508371,"samples":8302726},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16361477.110599332,"samples":8180739},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16408726.92024788,"samples":8204364}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,108,335|6554168|
|Object.create({})|1,478,525|739265|
|Cached Empty.prototype|16,924,559|8462280|
|Empty.prototype|1,516,640|758321|
|Empty class|1,016,983|508492|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:03:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13108335.48120506,"samples":6554168},{"name":"Object.create({})","opsSec":1478525.8897562325,"samples":739265},{"name":"Cached Empty.prototype","opsSec":16924559.23332542,"samples":8462280},{"name":"Empty.prototype","opsSec":1516640.9499270157,"samples":758321},{"name":"Empty class","opsSec":1016983.2362267509,"samples":508492}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|17,074,244|8537123|
|Using optional chain (obj.field?.field2) (undefined)|16,979,253|8489627|
|Using and operator (obj.field && obj.field.field2) (Valid)|17,014,893|8507447|
|Using and operator (obj.field && obj.field.field2) (undefined)|17,053,868|8526935|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:11:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":17074244.80317975,"samples":8537123},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16979253.878554914,"samples":8489627},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":17014893.261686664,"samples":8507447},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":17053868.389880206,"samples":8526935}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,773,711|8386856|
|Using parseInt(x, 10) - big number (10 len)|8,717,140|4358571|
|Using + - small number (2 len)|16,441,288|8220645|
|Using + - big number (10 len)|16,420,978|8210490|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:18:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16773711.808040103,"samples":8386856},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8717140.952522507,"samples":4358571},{"name":"Using + - small number (2 len)","opsSec":16441288.228201322,"samples":8220645},{"name":"Using + - big number (10 len)","opsSec":16420978.700197952,"samples":8210490}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|729,969|376748|
|Using ? operator to avoid rejection|797,149|398575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":729969.8773334762,"samples":376748},{"name":"Using ? operator to avoid rejection","opsSec":797149.0063917624,"samples":398575}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,203,906|8101954|
|Raw usage underscore usage|16,049,415|8024708|
|Manipulating private properties using #|14,479,194|7239734|
|Manipulating private properties using underscore(_)|14,034,063|7017032|
|Manipulating private properties using Symbol|14,836,033|7418017|
|Manipulating private properties using PrivateSymbol|10,613,013|5306507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:31:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":16203906.810099768,"samples":8101954},{"name":"Raw usage underscore usage","opsSec":16049415.82398197,"samples":8024708},{"name":"Manipulating private properties using #","opsSec":14479194.93817148,"samples":7239734},{"name":"Manipulating private properties using underscore(_)","opsSec":14034063.76578129,"samples":7017032},{"name":"Manipulating private properties using Symbol","opsSec":14836033.738248229,"samples":7418017},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10613013.519235475,"samples":5306507}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,912,868|1456435|
|Adding property in the object creation - small object|2,906,996|1453499|
|Adding property after the function creation - small class|211,279|105640|
|Adding property in the function creation - small class|219,056|109530|
|Adding property after the class creation - small class|180,662|90332|
|Adding property in the class creation - small class|180,217|90109|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:40:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2912868.630481496,"samples":1456435},{"name":"Adding property in the object creation - small object","opsSec":2906996.179966934,"samples":1453499},{"name":"Adding property after the function creation - small class","opsSec":211279.96957466562,"samples":105640},{"name":"Adding property in the function creation - small class","opsSec":219056.88192988277,"samples":109530},{"name":"Adding property after the class creation - small class","opsSec":180662.91644565435,"samples":90332},{"name":"Adding property in the class creation - small class","opsSec":180217.81197520607,"samples":90109}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,341,100|8170551|
|Getter|14,159,022|7079512|
|Method|16,569,268|8284635|
|DefineProperty (getter)|16,461,087|8230544|
|DefineProperty (getter & enumerable=false)|13,861,744|6930873|
|DefineProperty (getter & configurable=false)|16,690,327|8345164|
|DefineProperty (getter & enumerable=false & configurable=false)|14,012,608|7006305|
|DefineProperty (writable)|16,396,668|8198335|
|DefineProperty (writable & enumerable=false)|17,157,603|8578802|
|DefineProperty (writable & enumerable=false & configurable=false)|17,201,763|8600882|
|DefineProperties (getter)|13,763,595|6881798|
|DefineProperties (getter & enumerable=false)|13,766,879|6883440|
|DefineProperties (getter & enumerable=false & configurable=false)|14,051,472|7025737|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:47:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16341100.433799177,"samples":8170551},{"name":"Getter","opsSec":14159022.852236804,"samples":7079512},{"name":"Method","opsSec":16569268.593649955,"samples":8284635},{"name":"DefineProperty (getter)","opsSec":16461087.379908608,"samples":8230544},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13861744.598723479,"samples":6930873},{"name":"DefineProperty (getter & configurable=false)","opsSec":16690327.570237307,"samples":8345164},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14012608.175887093,"samples":7006305},{"name":"DefineProperty (writable)","opsSec":16396668.631755348,"samples":8198335},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17157603.198224492,"samples":8578802},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17201763.52425848,"samples":8600882},{"name":"DefineProperties (getter)","opsSec":13763595.763732221,"samples":6881798},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13766879.599561855,"samples":6883440},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14051472.720249515,"samples":7025737}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,839,349|8419675|
|Setter|6,131,888|3065945|
|Method|16,209,950|8104976|
|DefineProperty (setter)|16,014,376|8007189|
|DefineProperty (setter & enumerable=false)|6,160,452|3080227|
|DefineProperty (setter & configurable=false)|6,245,057|3122530|
|DefineProperty (setter & enumerable=false & configurable=false)|5,896,263|2948132|
|DefineProperty (writable)|15,535,315|7767658|
|DefineProperty (writable & enumerable=false)|15,533,474|7766738|
|DefineProperty (writable & enumerable=false & configurable=false)|15,571,324|7785663|
|DefineProperties (setter)|16,767,062|8383532|
|DefineProperties (setter & enumerable=false)|6,242,392|3121197|
|DefineProperties (setter & enumerable=false & configurable=false)|6,165,505|3082753|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:07:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16839349.735022288,"samples":8419675},{"name":"Setter","opsSec":6131888.684239431,"samples":3065945},{"name":"Method","opsSec":16209950.941057548,"samples":8104976},{"name":"DefineProperty (setter)","opsSec":16014376.80874501,"samples":8007189},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6160452.105291553,"samples":3080227},{"name":"DefineProperty (setter & configurable=false)","opsSec":6245057.784460548,"samples":3122530},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5896263.350530227,"samples":2948132},{"name":"DefineProperty (writable)","opsSec":15535315.059207434,"samples":7767658},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15533474.726006674,"samples":7766738},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15571324.826852169,"samples":7785663},{"name":"DefineProperties (setter)","opsSec":16767062.608842423,"samples":8383532},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6242392.508721043,"samples":3121197},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6165505.223855315,"samples":3082753}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,304,558|5152280|
|{ ...object, __proto__: null }|10,614,453|5307227|
|{ ...object, newProp: true }|602,119|301550|
|structuredClone|269,704|134853|
|JSON.parse + JSON.stringify|187,642|93822|
|loop + object.keys starting with {}|1,169,998|585000|
|loop + object.keys starting with { __proto__: null }|739,087|369544|
|loop + object.keys starting with { randomProp: true }|552,038|276020|
|object.keys + reduce(FN, {})|1,197,894|598948|
|object.keys + reduce(FN, { __proto__: null })|746,665|373333|
|object.keys + reduce(FN, { newProp: true })|557,191|278597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:23:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10304558.270414108,"samples":5152280},{"name":"{ ...object, __proto__: null }","opsSec":10614453.868404483,"samples":5307227},{"name":"{ ...object, newProp: true }","opsSec":602119.2481217523,"samples":301550},{"name":"structuredClone","opsSec":269704.5322295063,"samples":134853},{"name":"JSON.parse + JSON.stringify","opsSec":187642.47391603704,"samples":93822},{"name":"loop + object.keys starting with {}","opsSec":1169998.3781884739,"samples":585000},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":739087.2133890819,"samples":369544},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":552038.7025266816,"samples":276020},{"name":"object.keys + reduce(FN, {})","opsSec":1197894.8861584528,"samples":598948},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":746665.7365319036,"samples":373333},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":557191.896799538,"samples":278597}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|276,187|138094|
|Sort using first char|1,201,791|600896|
|Sort using localeCompare|1,152,474|576238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:31:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":276187.9437655201,"samples":138094},{"name":"Sort using first char","opsSec":1201791.1438503414,"samples":600896},{"name":"Sort using localeCompare","opsSec":1152474.9789493033,"samples":576238}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,186|1094|
|{...smallObject} - Total keys: 2|13,567,651|6783826|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,435|1218|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,504|3253|
|{ ...bigObject, ...anotherBigObject }|1,299|650|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,552,010|3276006|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,787,125|5393563|
|{ ...smallObject, ...anotherSmallObject }|9,372,528|4686265|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:39:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2186.315096659777,"samples":1094},{"name":"{...smallObject} - Total keys: 2","opsSec":13567651.165426731,"samples":6783826},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2435.5788693446502,"samples":1218},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6504.608027926244,"samples":3253},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1299.2806831148512,"samples":650},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6552010.222306338,"samples":3276006},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10787125.91770076,"samples":5393563},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9372528.239147127,"samples":4686265}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,870,620|8435311|
|Using backtick (`)|17,002,751|8501376|
|Using array.join|6,090,271|3045136|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:58:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16870620.14171159,"samples":8435311},{"name":"Using backtick (`)","opsSec":17002751.083847582,"samples":8501376},{"name":"Using array.join","opsSec":6090271.63989559,"samples":3045136}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|13,486,829|6743415|
|(short string) (true) String#slice and strict comparison|17,310,203|8655102|
|(long string) (true) String#endsWith|13,569,254|6784628|
|(long string) (true) String#slice and strict comparison|15,993,587|7996794|
|(short string) (false) String#endsWith|14,140,092|7070047|
|(short string) (false) String#slice and strict comparison|16,148,292|8074147|
|(long string) (false) String#endsWith|13,976,541|6988271|
|(long string) (false) String#slice and strict comparison|16,272,510|8136256|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:07:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":13486829.52410441,"samples":6743415},{"name":"(short string) (true) String#slice and strict comparison","opsSec":17310203.966983408,"samples":8655102},{"name":"(long string) (true) String#endsWith","opsSec":13569254.194779433,"samples":6784628},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15993587.336508704,"samples":7996794},{"name":"(short string) (false) String#endsWith","opsSec":14140092.05815386,"samples":7070047},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16148292.744882718,"samples":8074147},{"name":"(long string) (false) String#endsWith","opsSec":13976541.520153528,"samples":6988271},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16272510.060165636,"samples":8136256}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,260,312|8630157|
|Using indexof|17,233,824|8616913|
|Using RegExp.test|8,176,747|4088374|
|Using RegExp.text with cached regex pattern|8,633,317|4316659|
|Using new RegExp.test|3,036,810|1518406|
|Using new RegExp.test with cached regex pattern|3,186,542|1593272|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:19:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17260312.91359267,"samples":8630157},{"name":"Using indexof","opsSec":17233824.676945794,"samples":8616913},{"name":"Using RegExp.test","opsSec":8176747.672485922,"samples":4088374},{"name":"Using RegExp.text with cached regex pattern","opsSec":8633317.386613708,"samples":4316659},{"name":"Using new RegExp.test","opsSec":3036810.0581463394,"samples":1518406},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3186542.1477761846,"samples":1593272}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,112,195|7556098|
|(short string) (true) String#slice and strict comparison|17,075,396|8537699|
|(long string) (true) String#startsWith|14,435,171|7217586|
|(long string) (true) String#slice and strict comparison|15,901,506|7950754|
|(short string) (false) String#startsWith|16,003,285|8001643|
|(short string) (false) String#slice and strict comparison|16,599,503|8299752|
|(long string) (false) String#startsWith|15,717,258|7858630|
|(long string) (false) String#slice and strict comparison|16,571,501|8285751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:27:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15112195.128067201,"samples":7556098},{"name":"(short string) (true) String#slice and strict comparison","opsSec":17075396.59954442,"samples":8537699},{"name":"(long string) (true) String#startsWith","opsSec":14435171.717787724,"samples":7217586},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15901506.240876462,"samples":7950754},{"name":"(short string) (false) String#startsWith","opsSec":16003285.229272934,"samples":8001643},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16599503.390524978,"samples":8299752},{"name":"(long string) (false) String#startsWith","opsSec":15717258.426139703,"samples":7858630},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16571501.352043575,"samples":8285751}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,899,062|7949655|
|Using this|15,409,177|7704589|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:37:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15899062.744659254,"samples":7949655},{"name":"Using this","opsSec":15409177.49301088,"samples":7704589}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,388,841|3194421|
|Date.now()|8,953,626|4476814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:44:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6388841.451641339,"samples":3194421},{"name":"Date.now()","opsSec":8953626.586821364,"samples":4476814}]}-->
