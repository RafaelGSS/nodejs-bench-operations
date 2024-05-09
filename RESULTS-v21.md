## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,206,474|7603238|
|Using dot notation|15,112,090|7556046|
|Using define property (writable)|3,394,423|1697212|
|Using define property initialized (writable)|4,206,441|2103221|
|Using define property (getter)|2,098,849|1049425|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15206474.570586722,"samples":7603238},{"name":"Using dot notation","opsSec":15112090.186548922,"samples":7556046},{"name":"Using define property (writable)","opsSec":3394423.619818937,"samples":1697212},{"name":"Using define property initialized (writable)","opsSec":4206441.79808644,"samples":2103221},{"name":"Using define property (getter)","opsSec":2098849.7817223584,"samples":1049425}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.3ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|29.957ms
new Array(length)|1,000,000|7.765ms
array.push|100,000,000|1,903.614ms
new Array(length)|100,000,000|4,170.727ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.318ms
new Array(length)|10,000|0.201ms
array.push|1,000,000|19.236ms
new Array(length)|1,000,000|7.981ms
array.push|100,000,000|2,116.482ms
new Array(length)|100,000,000|4,798.587ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|236|119|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:40:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":236.7840377218385,"samples":119},{"name":"Array.from","opsSec":23.404131331198588,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|330,557|165279|
|[True conditional] Using constructor name|326,182|163092|
|[True conditional] Check if property is valid then instanceof |334,792|167397|
|[False conditional] Using instanceof only|15,366,493|7683247|
|[False conditional] Using constructor name|15,315,702|7657852|
|[False conditional] Check if property is valid then instanceof |15,338,555|7669278|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:55:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":330557.3269852781,"samples":165279},{"name":"[True conditional] Using constructor name","opsSec":326182.05008368543,"samples":163092},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":334792.7753280481,"samples":167397},{"name":"[False conditional] Using instanceof only","opsSec":15366493.723380392,"samples":7683247},{"name":"[False conditional] Using constructor name","opsSec":15315702.713506222,"samples":7657852},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15338555.907929517,"samples":7669278}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,880|3441|
|crypto.verify('RSA-SHA256')|6,984|3493|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:01:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6880.64971377759,"samples":3441},{"name":"crypto.verify('RSA-SHA256')","opsSec":6984.5801605758315,"samples":3493}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,056,221|528111|
|Using brackets {}|1,077,612|538807|
|Using '' + |1,076,848|538425|
|Using date.toString()|1,187,348|593675|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:16:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1056221.1486855405,"samples":528111},{"name":"Using brackets {}","opsSec":1077612.4503931345,"samples":538807},{"name":"Using '' + ","opsSec":1076848.1930490688,"samples":538425},{"name":"Using date.toString()","opsSec":1187348.0859950937,"samples":593675}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,229,679|1614840|
|Using delete property (proto: null)|8,924,528|4462265|
|Using delete property (cached proto: null)|3,103,523|1551762|
|Using undefined assignment|15,452,340|7726171|
|Using undefined assignment (proto: null)|9,287,437|4643719|
|Using undefined property (cached proto: null)|15,459,632|7729817|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:23:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3229679.580143805,"samples":1614840},{"name":"Using delete property (proto: null)","opsSec":8924528.375728248,"samples":4462265},{"name":"Using delete property (cached proto: null)","opsSec":3103523.925513374,"samples":1551762},{"name":"Using undefined assignment","opsSec":15452340.176612843,"samples":7726171},{"name":"Using undefined assignment (proto: null)","opsSec":9287437.294134187,"samples":4643719},{"name":"Using undefined property (cached proto: null)","opsSec":15459632.763150053,"samples":7729817}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|306,029|153015|
|NodeError|309,680|154841|
|NodeError Range|315,307|157654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:29:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":306029.22574605234,"samples":153015},{"name":"NodeError","opsSec":309680.9260265702,"samples":154841},{"name":"NodeError Range","opsSec":315307.2659647115,"samples":157654}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,672,396|836199|
|Function returning explicitly undefined|1,629,672|814837|
|Function returning implicitly undefined|1,650,434|825218|
|Function returning string|1,631,082|815542|
|Function returning integer|1,651,652|825827|
|Function returning float|1,641,064|820533|
|Function returning functions|1,623,975|811988|
|Function returning arrow functions|1,638,297|819149|
|Function returning empty object|1,676,883|838442|
|Function returning empty array|1,653,733|826867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1672396.4747747001,"samples":836199},{"name":"Function returning explicitly undefined","opsSec":1629672.2823251414,"samples":814837},{"name":"Function returning implicitly undefined","opsSec":1650434.2736450844,"samples":825218},{"name":"Function returning string","opsSec":1631082.8908660165,"samples":815542},{"name":"Function returning integer","opsSec":1651652.153453388,"samples":825827},{"name":"Function returning float","opsSec":1641064.276883344,"samples":820533},{"name":"Function returning functions","opsSec":1623975.714180538,"samples":811988},{"name":"Function returning arrow functions","opsSec":1638297.6395762658,"samples":819149},{"name":"Function returning empty object","opsSec":1676883.128023626,"samples":838442},{"name":"Function returning empty array","opsSec":1653733.8180888456,"samples":826867}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,226,038|7613020|
|using Array.includes (first item)|14,690,061|7345031|
|Using raw comparison|15,304,652|7652327|
|Using raw comparison (first item)|15,243,915|7621958|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:43:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":15226038.842857173,"samples":7613020},{"name":"using Array.includes (first item)","opsSec":14690061.999978248,"samples":7345031},{"name":"Using raw comparison","opsSec":15304652.714373548,"samples":7652327},{"name":"Using raw comparison (first item)","opsSec":15243915.451285904,"samples":7621958}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,797,878|6398940|
|Using Object.getOwnPropertyNames()|12,933,738|6466870|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:50:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":12797878.336265294,"samples":6398940},{"name":"Using Object.getOwnPropertyNames()","opsSec":12933738.913585138,"samples":6466870}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,149,833|7574917|
|Length = 10_000 - Array.at|15,131,279|7565640|
|Length = 1_000_000 - Array.at|15,081,778|7540890|
|Length = 100 - Array[length - 1]|15,155,088|7577545|
|Length = 10_000 - Array[length - 1]|15,075,756|7537879|
|Length = 1_000_000 - Array[length - 1]|15,163,445|7581723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:58:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15149833.969692992,"samples":7574917},{"name":"Length = 10_000 - Array.at","opsSec":15131279.576332863,"samples":7565640},{"name":"Length = 1_000_000 - Array.at","opsSec":15081778.823601374,"samples":7540890},{"name":"Length = 100 - Array[length - 1]","opsSec":15155088.51484278,"samples":7577545},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15075756.371791543,"samples":7537879},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15163445.54502256,"samples":7581723}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,730,094|6365048|
|Object.create({})|1,997,213|998607|
|Cached Empty.prototype|15,129,515|7564758|
|Empty.prototype|1,963,099|981550|
|Empty class|1,243,609|621805|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12730094.548766183,"samples":6365048},{"name":"Object.create({})","opsSec":1997213.468740547,"samples":998607},{"name":"Cached Empty.prototype","opsSec":15129515.848706856,"samples":7564758},{"name":"Empty.prototype","opsSec":1963099.6387892512,"samples":981550},{"name":"Empty class","opsSec":1243609.5100185513,"samples":621805}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,047,655|7523828|
|Using optional chain (obj.field?.field2) (undefined)|15,178,391|7589196|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,103,023|7551512|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,204,569|7602285|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:14:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15047655.368016765,"samples":7523828},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15178391.939310761,"samples":7589196},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15103023.848996412,"samples":7551512},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15204569.543895671,"samples":7602285}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,309,063|7654532|
|Using parseInt(x, 10) - big number (10 len)|15,316,954|7658478|
|Using + - small number (2 len)|15,323,803|7661902|
|Using + - big number (10 len)|15,369,966|7684984|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:23:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15309063.693826182,"samples":7654532},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15316954.529579028,"samples":7658478},{"name":"Using + - small number (2 len)","opsSec":15323803.754835725,"samples":7661902},{"name":"Using + - big number (10 len)","opsSec":15369966.217107471,"samples":7684984}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,101,109|550555|
|Using ? operator to avoid rejection|1,080,713|540361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:28:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1101109.2160102336,"samples":550555},{"name":"Using ? operator to avoid rejection","opsSec":1080713.276482353,"samples":540361}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,131,509|7565755|
|Raw usage underscore usage|15,141,557|7570779|
|Manipulating private properties using #|15,205,621|7602811|
|Manipulating private properties using underscore(_)|15,196,244|7598123|
|Manipulating private properties using Symbol|15,140,604|7570303|
|Manipulating private properties using PrivateSymbol|12,104,098|6052050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:37:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15131509.727627227,"samples":7565755},{"name":"Raw usage underscore usage","opsSec":15141557.000644645,"samples":7570779},{"name":"Manipulating private properties using #","opsSec":15205621.999949163,"samples":7602811},{"name":"Manipulating private properties using underscore(_)","opsSec":15196244.814704334,"samples":7598123},{"name":"Manipulating private properties using Symbol","opsSec":15140604.637324963,"samples":7570303},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12104098.644342694,"samples":6052050}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,772,876|1886439|
|Adding property in the object creation - small object|3,744,386|1872194|
|Adding property after the function creation - small class|266,869|133435|
|Adding property in the function creation - small class|280,157|140079|
|Adding property after the class creation - small class|273,977|136993|
|Adding property in the class creation - small class|266,024|133013|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:44:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3772876.128652639,"samples":1886439},{"name":"Adding property in the object creation - small object","opsSec":3744386.5396871953,"samples":1872194},{"name":"Adding property after the function creation - small class","opsSec":266869.3573785536,"samples":133435},{"name":"Adding property in the function creation - small class","opsSec":280157.5724794746,"samples":140079},{"name":"Adding property after the class creation - small class","opsSec":273977.5028617666,"samples":136993},{"name":"Adding property in the class creation - small class","opsSec":266024.6475307611,"samples":133013}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,218,910|7609456|
|Getter|12,842,523|6421262|
|Method|14,889,576|7444789|
|DefineProperty (getter)|15,381,458|7690730|
|DefineProperty (getter & enumerable=false)|13,263,843|6631922|
|DefineProperty (getter & configurable=false)|15,384,124|7692063|
|DefineProperty (getter & enumerable=false & configurable=false)|13,360,113|6680057|
|DefineProperty (writable)|15,252,693|7626347|
|DefineProperty (writable & enumerable=false)|15,321,930|7660966|
|DefineProperty (writable & enumerable=false & configurable=false)|15,341,559|7670780|
|DefineProperties (getter)|13,485,303|6742652|
|DefineProperties (getter & enumerable=false)|13,368,058|6684030|
|DefineProperties (getter & enumerable=false & configurable=false)|13,429,839|6714920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:56:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15218910.265025843,"samples":7609456},{"name":"Getter","opsSec":12842523.614712387,"samples":6421262},{"name":"Method","opsSec":14889576.33235356,"samples":7444789},{"name":"DefineProperty (getter)","opsSec":15381458.246529507,"samples":7690730},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13263843.840833433,"samples":6631922},{"name":"DefineProperty (getter & configurable=false)","opsSec":15384124.861546503,"samples":7692063},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13360113.278520199,"samples":6680057},{"name":"DefineProperty (writable)","opsSec":15252693.023743415,"samples":7626347},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15321930.651841328,"samples":7660966},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15341559.324611282,"samples":7670780},{"name":"DefineProperties (getter)","opsSec":13485303.568644399,"samples":6742652},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13368058.075088859,"samples":6684030},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13429839.785034548,"samples":6714920}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,030,668|7515335|
|Setter|6,822,931|3411466|
|Method|15,241,206|7620604|
|DefineProperty (setter)|15,144,556|7572279|
|DefineProperty (setter & enumerable=false)|6,773,104|3386553|
|DefineProperty (setter & configurable=false)|6,716,254|3358128|
|DefineProperty (setter & enumerable=false & configurable=false)|6,700,258|3350130|
|DefineProperty (writable)|15,192,559|7596280|
|DefineProperty (writable & enumerable=false)|15,227,529|7613859|
|DefineProperty (writable & enumerable=false & configurable=false)|15,195,151|7597576|
|DefineProperties (setter)|15,139,332|7569667|
|DefineProperties (setter & enumerable=false)|6,597,991|3298996|
|DefineProperties (setter & enumerable=false & configurable=false)|6,610,611|3305306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:14:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15030668.196331782,"samples":7515335},{"name":"Setter","opsSec":6822931.754374311,"samples":3411466},{"name":"Method","opsSec":15241206.780721953,"samples":7620604},{"name":"DefineProperty (setter)","opsSec":15144556.394729372,"samples":7572279},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6773104.076436658,"samples":3386553},{"name":"DefineProperty (setter & configurable=false)","opsSec":6716254.885085284,"samples":3358128},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6700258.150714816,"samples":3350130},{"name":"DefineProperty (writable)","opsSec":15192559.847944355,"samples":7596280},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15227529.513688661,"samples":7613859},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15195151.301093008,"samples":7597576},{"name":"DefineProperties (setter)","opsSec":15139332.213622523,"samples":7569667},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6597991.762553155,"samples":3298996},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6610611.524062744,"samples":3305306}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,277,071|5138536|
|{ ...object, __proto__: null }|2,218,596|1109299|
|{ ...object, newProp: true }|10,064,957|5032480|
|structuredClone|295,187|147594|
|JSON.parse + JSON.stringify|248,426|124214|
|loop + object.keys starting with {}|1,417,723|708862|
|loop + object.keys starting with { __proto__: null }|809,392|404697|
|loop + object.keys starting with { randomProp: true }|662,177|331089|
|object.keys + reduce(FN, {})|647,527|323764|
|object.keys + reduce(FN, { __proto__: null })|827,986|413994|
|object.keys + reduce(FN, { newProp: true })|673,295|336648|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:28:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10277071.815009462,"samples":5138536},{"name":"{ ...object, __proto__: null }","opsSec":2218596.2029366186,"samples":1109299},{"name":"{ ...object, newProp: true }","opsSec":10064957.926615676,"samples":5032480},{"name":"structuredClone","opsSec":295187.55013419525,"samples":147594},{"name":"JSON.parse + JSON.stringify","opsSec":248426.20884727375,"samples":124214},{"name":"loop + object.keys starting with {}","opsSec":1417723.937620296,"samples":708862},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":809392.9089385048,"samples":404697},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":662177.219956197,"samples":331089},{"name":"object.keys + reduce(FN, {})","opsSec":647527.7448736689,"samples":323764},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":827986.8805610242,"samples":413994},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":673295.2849610691,"samples":336648}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|346,463|173232|
|Sort using first char|1,338,211|669106|
|Sort using localeCompare|1,263,717|631859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:35:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":346463.5766214971,"samples":173232},{"name":"Sort using first char","opsSec":1338211.1997496202,"samples":669106},{"name":"Sort using localeCompare","opsSec":1263717.267044322,"samples":631859}]}-->
