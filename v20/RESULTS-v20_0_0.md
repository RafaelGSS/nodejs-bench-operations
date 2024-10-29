## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|115,696,852|57854759|
|Using dot notation|77,682,240|38843086|
|Using define property (writable)|4,481,086|2240701|
|Using define property initialized (writable)|5,994,570|2997531|
|Using define property (getter)|2,225,164|1112620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:42:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":115696852.20280194,"samples":57854759},{"name":"Using dot notation","opsSec":77682240.65716483,"samples":38843086},{"name":"Using define property (writable)","opsSec":4481086.56735435,"samples":2240701},{"name":"Using define property initialized (writable)","opsSec":5994570.133531404,"samples":2997531},{"name":"Using define property (getter)","opsSec":2225164.273209454,"samples":1112620}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.008ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.039ms
array.push|10,000|0.293ms
new Array(length)|10,000|0.338ms
array.push|1,000,000|32.289ms
new Array(length)|1,000,000|7.019ms
array.push|100,000,000|1,804.359ms
new Array(length)|100,000,000|4,441.603ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.021ms
new Array(length)|100|0.009ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.012ms
array.push|10,000|0.287ms
new Array(length)|10,000|0.153ms
array.push|1,000,000|23.751ms
new Array(length)|1,000,000|4.288ms
array.push|100,000,000|2,517.665ms
new Array(length)|100,000,000|4,091.941ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|253|128|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:57:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":253.45573328492014,"samples":128},{"name":"Array.from","opsSec":22.399925309689046,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,497|2249|
|new Blob (1024)|568|286|
|text (128)|4,770|2388|
|text (1024)|592|297|
|arrayBuffer (128)|4,811|2408|
|arrayBuffer (1024)|600|301|
|slice (0, 64)|63,608|36186|
|slice (0, 512)|25,397|12699|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:03:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4497.8245758458925,"samples":2249},{"name":"new Blob (1024)","opsSec":568.2936253462835,"samples":286},{"name":"text (128)","opsSec":4770.679880917197,"samples":2388},{"name":"text (1024)","opsSec":592.194577575734,"samples":297},{"name":"arrayBuffer (128)","opsSec":4811.747531507574,"samples":2408},{"name":"arrayBuffer (1024)","opsSec":600.5952749186362,"samples":301},{"name":"slice (0, 64)","opsSec":63608.04791887838,"samples":36186},{"name":"slice (0, 512)","opsSec":25397.23940347435,"samples":12699}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|398,657|199364|
|[True conditional] Using constructor name|313,121|156562|
|[True conditional] Check if property is valid then instanceof |323,157|161580|
|[False conditional] Using instanceof only|45,911,827|22955992|
|[False conditional] Using constructor name|99,758,451|49879232|
|[False conditional] Check if property is valid then instanceof |99,778,497|49907113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:08:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":398657.49343571096,"samples":199364},{"name":"[True conditional] Using constructor name","opsSec":313121.3672755439,"samples":156562},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":323157.70493397955,"samples":161580},{"name":"[False conditional] Using instanceof only","opsSec":45911827.8079618,"samples":22955992},{"name":"[False conditional] Using constructor name","opsSec":99758451.03140135,"samples":49879232},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":99778497.9141379,"samples":49907113}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,370|3186|
|crypto.verify('RSA-SHA256')|6,509|3255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:14:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6370.399781056598,"samples":3186},{"name":"crypto.verify('RSA-SHA256')","opsSec":6509.684762005715,"samples":3255}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,415,129|707693|
|fromUnixToISOString(new Date())|2,157,043|1078522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:20:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1415129.7652836596,"samples":707693},{"name":"fromUnixToISOString(new Date())","opsSec":2157043.1112982384,"samples":1078522}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,373|6187|
|Intl.DateTimeFormat().format(new Date())|12,395|6198|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,131|6572|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,772|6387|
|Reusing Intl.DateTimeFormat()|615,579|307791|
|Date.toLocaleDateString()|603,033|301801|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,845|6424|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:26:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12373.926919587613,"samples":6187},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12395.350310108846,"samples":6198},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13131.596970292812,"samples":6572},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":12772.438824802446,"samples":6387},{"name":"Reusing Intl.DateTimeFormat()","opsSec":615579.6792646092,"samples":307791},{"name":"Date.toLocaleDateString()","opsSec":603033.2829290694,"samples":301801},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12845.884668171693,"samples":6424}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,047,497|523940|
|Using brackets {}|1,052,960|532550|
|Using '' + |1,034,777|517389|
|Using date.toString()|1,172,018|586032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:32:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1047497.9753933782,"samples":523940},{"name":"Using brackets {}","opsSec":1052960.277755163,"samples":532550},{"name":"Using '' + ","opsSec":1034777.7247491252,"samples":517389},{"name":"Using date.toString()","opsSec":1172018.0029814548,"samples":586032}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,695,299|1847708|
|Using delete property (proto: null)|15,262,244|7631124|
|Using delete property (cached proto: null)|3,638,668|1819668|
|Using undefined assignment|80,593,705|40301771|
|Using undefined assignment (proto: null)|17,063,237|8532704|
|Using undefined property (cached proto: null)|79,980,725|40024319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:37:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3695299.856725503,"samples":1847708},{"name":"Using delete property (proto: null)","opsSec":15262244.306536878,"samples":7631124},{"name":"Using delete property (cached proto: null)","opsSec":3638668.1879501287,"samples":1819668},{"name":"Using undefined assignment","opsSec":80593705.6994068,"samples":40301771},{"name":"Using undefined assignment (proto: null)","opsSec":17063237.760915663,"samples":8532704},{"name":"Using undefined property (cached proto: null)","opsSec":79980725.40628882,"samples":40024319}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|380,527|190321|
|NodeError|321,294|160648|
|NodeError Range|320,159|160096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:43:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":380527.83327840414,"samples":190321},{"name":"NodeError","opsSec":321294.5265433013,"samples":160648},{"name":"NodeError Range","opsSec":320159.7202163689,"samples":160096}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,619,748|809914|
|Function returning explicitly undefined|1,594,439|797238|
|Function returning implicitly undefined|1,601,011|800568|
|Function returning string|1,575,831|787916|
|Function returning integer|1,611,488|805858|
|Function returning float|1,608,787|804396|
|Function returning functions|1,548,880|774441|
|Function returning arrow functions|1,589,253|794627|
|Function returning empty object|1,604,140|802071|
|Function returning empty array|1,617,059|808600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:49:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1619748.991883674,"samples":809914},{"name":"Function returning explicitly undefined","opsSec":1594439.6850417336,"samples":797238},{"name":"Function returning implicitly undefined","opsSec":1601011.809513936,"samples":800568},{"name":"Function returning string","opsSec":1575831.1458995189,"samples":787916},{"name":"Function returning integer","opsSec":1611488.892870328,"samples":805858},{"name":"Function returning float","opsSec":1608787.0288480807,"samples":804396},{"name":"Function returning functions","opsSec":1548880.2156899914,"samples":774441},{"name":"Function returning arrow functions","opsSec":1589253.930072827,"samples":794627},{"name":"Function returning empty object","opsSec":1604140.8450185915,"samples":802071},{"name":"Function returning empty array","opsSec":1617059.0603664168,"samples":808600}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|81,174,777|40605056|
|using Array.includes (first item)|88,020,490|44069235|
|Using raw comparison|100,284,789|50152599|
|Using raw comparison (first item)|100,740,858|50370437|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:55:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":81174777.91796876,"samples":40605056},{"name":"using Array.includes (first item)","opsSec":88020490.50326708,"samples":44069235},{"name":"Using raw comparison","opsSec":100284789.44363947,"samples":50152599},{"name":"Using raw comparison (first item)","opsSec":100740858.6873895,"samples":50370437}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|51,243,916|25625762|
|Using Object.getOwnPropertyNames()|43,341,088|21885632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:00:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":51243916.32818192,"samples":25625762},{"name":"Using Object.getOwnPropertyNames()","opsSec":43341088.61281894,"samples":21885632}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|127,645,443|64845586|
|Length = 10_000 - Array.at|94,191,965|48124752|
|Length = 1_000_000 - Array.at|99,127,031|49563688|
|Length = 100 - Array[length - 1]|99,090,776|49545396|
|Length = 10_000 - Array[length - 1]|98,353,228|49200061|
|Length = 1_000_000 - Array[length - 1]|98,923,445|49464071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:06:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":127645443.91219723,"samples":64845586},{"name":"Length = 10_000 - Array.at","opsSec":94191965.29098715,"samples":48124752},{"name":"Length = 1_000_000 - Array.at","opsSec":99127031.037932,"samples":49563688},{"name":"Length = 100 - Array[length - 1]","opsSec":99090776.74002038,"samples":49545396},{"name":"Length = 10_000 - Array[length - 1]","opsSec":98353228.16434352,"samples":49200061},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":98923445.90617593,"samples":49464071}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|141,568,208|70925809|
|~ (small)|101,480,933|50767297|
|Math.floor (long)|103,260,946|51643588|
|~ (long)|102,127,935|51092983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:11:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":141568208.6392153,"samples":70925809},{"name":"~ (small)","opsSec":101480933.52085845,"samples":50767297},{"name":"Math.floor (long)","opsSec":103260946.68693206,"samples":51643588},{"name":"~ (long)","opsSec":102127935.68141061,"samples":51092983}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,741,442|23374409|
|Object.create({})|2,010,956|1005526|
|Cached Empty.prototype|81,689,460|40847247|
|Empty.prototype|2,240,578|1126806|
|Empty class|1,379,695|701331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:18:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":46741442.200420775,"samples":23374409},{"name":"Object.create({})","opsSec":2010956.5881537185,"samples":1005526},{"name":"Cached Empty.prototype","opsSec":81689460.29545659,"samples":40847247},{"name":"Empty.prototype","opsSec":2240578.5991006037,"samples":1126806},{"name":"Empty class","opsSec":1379695.0254132308,"samples":701331}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|152,080,685|76040794|
|Using optional chain (obj.field?.field2) (undefined)|100,228,919|50115154|
|Using and operator (obj.field && obj.field.field2) (Valid)|100,249,458|50149533|
|Using and operator (obj.field && obj.field.field2) (undefined)|99,758,292|49879152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:23:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":152080685.55321193,"samples":76040794},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":100228919.82946037,"samples":50115154},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":100249458.35752745,"samples":50149533},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":99758292.02900496,"samples":49879152}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|146,408,274|73206543|
|Using parseInt(x, 10) - big number (10 len)|101,965,889|50982983|
|Using + - small number (2 len)|97,286,707|48643362|
|Using + - big number (10 len)|100,610,095|50343311|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:29:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":146408274.73127577,"samples":73206543},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":101965889.52558285,"samples":50982983},{"name":"Using + - small number (2 len)","opsSec":97286707.46125972,"samples":48643362},{"name":"Using + - big number (10 len)","opsSec":100610095.5466849,"samples":50343311}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|983,777|493010|
|Using ? operator to avoid rejection|1,075,735|550512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:34:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":983777.9327077975,"samples":493010},{"name":"Using ? operator to avoid rejection","opsSec":1075735.88060995,"samples":550512}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|133,523,316|66858972|
|Raw usage underscore usage|101,429,593|50718666|
|Manipulating private properties using #|91,420,260|45710808|
|Manipulating private properties using underscore(_)|100,936,387|50468312|
|Manipulating private properties using Symbol|100,899,738|50450342|
|Manipulating private properties using PrivateSymbol|36,624,972|18314899|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:40:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":133523316.14164583,"samples":66858972},{"name":"Raw usage underscore usage","opsSec":101429593.32774746,"samples":50718666},{"name":"Manipulating private properties using #","opsSec":91420260.96889192,"samples":45710808},{"name":"Manipulating private properties using underscore(_)","opsSec":100936387.20323561,"samples":50468312},{"name":"Manipulating private properties using Symbol","opsSec":100899738.97304478,"samples":50450342},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36624972.806332655,"samples":18314899}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,912,337|3960460|
|Adding property in the object creation - small object|7,288,474|3644240|
|Adding property after the function creation - small class|240,251|120128|
|Adding property in the function creation - small class|252,454|126982|
|Adding property after the class creation - small class|214,674|108939|
|Adding property in the class creation - small class|213,149|106577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:46:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7912337.218799303,"samples":3960460},{"name":"Adding property in the object creation - small object","opsSec":7288474.489913286,"samples":3644240},{"name":"Adding property after the function creation - small class","opsSec":240251.83547468387,"samples":120128},{"name":"Adding property in the function creation - small class","opsSec":252454.34974866407,"samples":126982},{"name":"Adding property after the class creation - small class","opsSec":214674.6188965866,"samples":108939},{"name":"Adding property in the class creation - small class","opsSec":213149.2616919126,"samples":106577}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|151,640,867|75820458|
|Getter|53,823,658|26911835|
|Method|99,393,345|49696697|
|DefineProperty (getter)|101,179,251|50589635|
|DefineProperty (getter & enumerable=false)|47,992,262|24005986|
|DefineProperty (getter & configurable=false)|101,669,557|50836779|
|DefineProperty (getter & enumerable=false & configurable=false)|49,568,157|24793468|
|DefineProperty (writable)|102,306,795|51167669|
|DefineProperty (writable & enumerable=false)|103,438,432|51719227|
|DefineProperty (writable & enumerable=false & configurable=false)|103,881,983|51942436|
|DefineProperties (getter)|53,481,800|26740905|
|DefineProperties (getter & enumerable=false)|53,291,412|26645724|
|DefineProperties (getter & enumerable=false & configurable=false)|53,357,477|26678746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:52:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":151640867.4749224,"samples":75820458},{"name":"Getter","opsSec":53823658.051147915,"samples":26911835},{"name":"Method","opsSec":99393345.694834,"samples":49696697},{"name":"DefineProperty (getter)","opsSec":101179251.58537622,"samples":50589635},{"name":"DefineProperty (getter & enumerable=false)","opsSec":47992262.53762104,"samples":24005986},{"name":"DefineProperty (getter & configurable=false)","opsSec":101669557.50625125,"samples":50836779},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":49568157.6982739,"samples":24793468},{"name":"DefineProperty (writable)","opsSec":102306795.83625682,"samples":51167669},{"name":"DefineProperty (writable & enumerable=false)","opsSec":103438432.69168288,"samples":51719227},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":103881983.87308437,"samples":51942436},{"name":"DefineProperties (getter)","opsSec":53481800.15934878,"samples":26740905},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53291412.50791927,"samples":26645724},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53357477.16662135,"samples":26678746}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|148,170,961|74162605|
|Setter|11,004,303|5502156|
|Method|99,764,764|49896392|
|DefineProperty (setter)|104,142,170|52071102|
|DefineProperty (setter & enumerable=false)|11,154,278|5577142|
|DefineProperty (setter & configurable=false)|10,962,816|5481410|
|DefineProperty (setter & enumerable=false & configurable=false)|11,178,347|5589244|
|DefineProperty (writable)|104,139,711|52074781|
|DefineProperty (writable & enumerable=false)|104,726,958|52363645|
|DefineProperty (writable & enumerable=false & configurable=false)|104,881,250|52444587|
|DefineProperties (setter)|93,612,883|46809438|
|DefineProperties (setter & enumerable=false)|11,148,217|5574146|
|DefineProperties (setter & enumerable=false & configurable=false)|11,116,160|5558083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:59:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":148170961.3621447,"samples":74162605},{"name":"Setter","opsSec":11004303.812797964,"samples":5502156},{"name":"Method","opsSec":99764764.06836377,"samples":49896392},{"name":"DefineProperty (setter)","opsSec":104142170.25793684,"samples":52071102},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11154278.86903172,"samples":5577142},{"name":"DefineProperty (setter & configurable=false)","opsSec":10962816.075311843,"samples":5481410},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11178347.599954143,"samples":5589244},{"name":"DefineProperty (writable)","opsSec":104139711.42469634,"samples":52074781},{"name":"DefineProperty (writable & enumerable=false)","opsSec":104726958.8533561,"samples":52363645},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":104881250.85078573,"samples":52444587},{"name":"DefineProperties (setter)","opsSec":93612883.65209167,"samples":46809438},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11148217.41842547,"samples":5574146},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11116160.931030616,"samples":5558083}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,577,786|1789272|
|Using replaceAll()|3,066,298|1536333|
|Using replaceAll(//g)|3,150,055|1578041|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:06:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3577786.0603342624,"samples":1789272},{"name":"Using replaceAll()","opsSec":3066298.0104135093,"samples":1536333},{"name":"Using replaceAll(//g)","opsSec":3150055.5028153434,"samples":1578041}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,153,029|11090890|
|{ ...object, __proto__: null }|20,518,580|10259758|
|{ ...object, newProp: true }|824,012|413538|
|structuredClone|266,017|133011|
|JSON.parse + JSON.stringify|206,963|103485|
|loop + object.keys starting with {}|1,545,289|772867|
|loop + object.keys starting with { __proto__: null }|819,765|409883|
|loop + object.keys starting with { randomProp: true }|608,042|304130|
|object.keys + reduce(FN, {})|1,569,627|784816|
|object.keys + reduce(FN, { __proto__: null })|826,766|413603|
|object.keys + reduce(FN, { newProp: true })|607,022|303512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:11:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":22153029.974922787,"samples":11090890},{"name":"{ ...object, __proto__: null }","opsSec":20518580.065488894,"samples":10259758},{"name":"{ ...object, newProp: true }","opsSec":824012.7113213325,"samples":413538},{"name":"structuredClone","opsSec":266017.54154600366,"samples":133011},{"name":"JSON.parse + JSON.stringify","opsSec":206963.79356975842,"samples":103485},{"name":"loop + object.keys starting with {}","opsSec":1545289.3182740374,"samples":772867},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":819765.3736992546,"samples":409883},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":608042.1093262072,"samples":304130},{"name":"object.keys + reduce(FN, {})","opsSec":1569627.1624090853,"samples":784816},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":826766.214940222,"samples":413603},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":607022.2262810548,"samples":303512}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|271,661|135859|
|Sort using first char|1,306,817|653410|
|Sort using localeCompare|1,246,528|623478|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:17:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":271661.9871015275,"samples":135859},{"name":"Sort using first char","opsSec":1306817.5118194574,"samples":653410},{"name":"Sort using localeCompare","opsSec":1246528.5229874977,"samples":623478}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,849|926|
|{...smallObject} - Total keys: 2|53,440,588|26720467|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,075|538|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,657|3329|
|{ ...bigObject, ...anotherBigObject }|1,150|576|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,191,689|6595851|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,941,670|14485267|
|{ ...smallObject, ...anotherSmallObject }|21,002,248|10505953|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:23:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1849.9330032578716,"samples":926},{"name":"{...smallObject} - Total keys: 2","opsSec":53440588.02563312,"samples":26720467},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1075.3565689997915,"samples":538},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6657.2787903595245,"samples":3329},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1150.9977916928394,"samples":576},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13191689.045761358,"samples":6595851},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28941670.24073555,"samples":14485267},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21002248.536055665,"samples":10505953}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,335|1168|
|streams.web.Readable reading 1e3 * "some data"|524|263|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:13:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2335.945320236795,"samples":1168},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":524.7033656345835,"samples":263}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,943|2972|
|streams.web.WritableStream writing 1e3 * "some data"|1,847|925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:18:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5943.841465893247,"samples":2972},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1847.545011583907,"samples":925}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,764,361|7382181|
|Using backtick (`)|14,829,155|7414578|
|Using array.join|5,891,417|2945709|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":14764361.403233374,"samples":7382181},{"name":"Using backtick (`)","opsSec":14829155.028166773,"samples":7414578},{"name":"Using array.join","opsSec":5891417.247034107,"samples":2945709}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,101,669|6050835|
|(short string) (true) String#slice and strict comparison|12,303,487|6151744|
|(long string) (true) String#endsWith|12,184,005|6092003|
|(long string) (true) String#slice and strict comparison|12,218,985|6109493|
|(short string) (false) String#endsWith|12,588,913|6294457|
|(short string) (false) String#slice and strict comparison|12,460,160|6230081|
|(long string) (false) String#endsWith|12,040,765|6020383|
|(long string) (false) String#slice and strict comparison|11,631,452|5815727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:40:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12101669.67026855,"samples":6050835},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12303487.180853654,"samples":6151744},{"name":"(long string) (true) String#endsWith","opsSec":12184005.656405587,"samples":6092003},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12218985.97186909,"samples":6109493},{"name":"(short string) (false) String#endsWith","opsSec":12588913.322145607,"samples":6294457},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12460160.593543224,"samples":6230081},{"name":"(long string) (false) String#endsWith","opsSec":12040765.78074706,"samples":6020383},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11631452.331601022,"samples":5815727}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|7,783,575|3891788|
|Using indexof|7,959,196|3979599|
|Using RegExp.test|7,250,042|3625022|
|Using RegExp.text with cached regex pattern|7,258,144|3629073|
|Using new RegExp.test|3,191,626|1595814|
|Using new RegExp.test with cached regex pattern|3,587,357|1793679|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:53:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":7783575.134931041,"samples":3891788},{"name":"Using indexof","opsSec":7959196.284373375,"samples":3979599},{"name":"Using RegExp.test","opsSec":7250042.290739297,"samples":3625022},{"name":"Using RegExp.text with cached regex pattern","opsSec":7258144.775687831,"samples":3629073},{"name":"Using new RegExp.test","opsSec":3191626.358265431,"samples":1595814},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3587357.808601519,"samples":1793679}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,567,010|6783506|
|(short string) (true) String#slice and strict comparison|12,014,351|6007176|
|(long string) (true) String#startsWith|12,949,807|6474904|
|(long string) (true) String#slice and strict comparison|11,817,970|5908986|
|(short string) (false) String#startsWith|14,285,559|7142780|
|(short string) (false) String#slice and strict comparison|12,310,159|6155080|
|(long string) (false) String#startsWith|14,228,109|7114055|
|(long string) (false) String#slice and strict comparison|11,822,858|5911430|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:06:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13567010.511262754,"samples":6783506},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12014351.9967775,"samples":6007176},{"name":"(long string) (true) String#startsWith","opsSec":12949807.424475422,"samples":6474904},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11817970.645603474,"samples":5908986},{"name":"(short string) (false) String#startsWith","opsSec":14285559.051125653,"samples":7142780},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12310159.638998596,"samples":6155080},{"name":"(long string) (false) String#startsWith","opsSec":14228109.769327292,"samples":7114055},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11822858.429758294,"samples":5911430}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,132,706|7066354|
|Using this|14,031,318|7015660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:22:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":14132706.447608268,"samples":7066354},{"name":"Using this","opsSec":14031318.650892325,"samples":7015660}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,811,266|2905634|
|Date.now()|8,271,662|4135832|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:29:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5811266.503038823,"samples":2905634},{"name":"Date.now()","opsSec":8271662.606452086,"samples":4135832}]}-->
