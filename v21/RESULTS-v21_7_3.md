## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,322,310|7661156|
|Using dot notation|15,349,400|7674701|
|Using define property (writable)|3,487,372|1743687|
|Using define property initialized (writable)|4,224,595|2112298|
|Using define property (getter)|2,204,322|1102162|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15322310.191979265,"samples":7661156},{"name":"Using dot notation","opsSec":15349400.772048611,"samples":7674701},{"name":"Using define property (writable)","opsSec":3487372.9537892314,"samples":1743687},{"name":"Using define property initialized (writable)","opsSec":4224595.543752057,"samples":2112298},{"name":"Using define property (getter)","opsSec":2204322.4569770377,"samples":1102162}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.012ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.271ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|30.426ms
new Array(length)|1,000,000|7.718ms
array.push|100,000,000|1,913.727ms
new Array(length)|100,000,000|4,197.673ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.307ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|21.848ms
new Array(length)|1,000,000|7.361ms
array.push|100,000,000|2,141.165ms
new Array(length)|100,000,000|4,881.426ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|237|119|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":237.68394975054437,"samples":119},{"name":"Array.from","opsSec":23.645690560776895,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|314,311|157156|
|[True conditional] Using constructor name|325,194|162598|
|[True conditional] Check if property is valid then instanceof |332,029|166015|
|[False conditional] Using instanceof only|15,204,959|7602480|
|[False conditional] Using constructor name|15,240,681|7620342|
|[False conditional] Check if property is valid then instanceof |15,280,638|7640320|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:44:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":314311.2588540121,"samples":157156},{"name":"[True conditional] Using constructor name","opsSec":325194.1379383782,"samples":162598},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":332029.29144952487,"samples":166015},{"name":"[False conditional] Using instanceof only","opsSec":15204959.99998812,"samples":7602480},{"name":"[False conditional] Using constructor name","opsSec":15240681.957734978,"samples":7620342},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15280638.533036355,"samples":7640320}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,062|3532|
|crypto.verify('RSA-SHA256')|7,234|3618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:45:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7062.17809929398,"samples":3532},{"name":"crypto.verify('RSA-SHA256')","opsSec":7234.269331279318,"samples":3618}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,047,862|523932|
|Using brackets {}|1,088,890|544446|
|Using '' + |1,080,410|540206|
|Using date.toString()|1,197,806|598904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:50:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1047862.5937683608,"samples":523932},{"name":"Using brackets {}","opsSec":1088890.34706448,"samples":544446},{"name":"Using '' + ","opsSec":1080410.070387922,"samples":540206},{"name":"Using date.toString()","opsSec":1197806.1314226761,"samples":598904}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,256,232|1628117|
|Using delete property (proto: null)|8,959,913|4479957|
|Using delete property (cached proto: null)|3,119,534|1559768|
|Using undefined assignment|15,407,776|7703889|
|Using undefined assignment (proto: null)|9,495,478|4747740|
|Using undefined property (cached proto: null)|15,291,161|7645581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:53:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3256232.39142106,"samples":1628117},{"name":"Using delete property (proto: null)","opsSec":8959913.838707015,"samples":4479957},{"name":"Using delete property (cached proto: null)","opsSec":3119534.309211951,"samples":1559768},{"name":"Using undefined assignment","opsSec":15407776.243527684,"samples":7703889},{"name":"Using undefined assignment (proto: null)","opsSec":9495478.613662416,"samples":4747740},{"name":"Using undefined property (cached proto: null)","opsSec":15291161.938829437,"samples":7645581}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|297,169|148585|
|NodeError|292,862|146432|
|NodeError Range|300,172|150087|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:54:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":297169.9893018678,"samples":148585},{"name":"NodeError","opsSec":292862.1362253696,"samples":146432},{"name":"NodeError Range","opsSec":300172.2127746631,"samples":150087}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,655,530|827766|
|Function returning explicitly undefined|1,634,714|817358|
|Function returning implicitly undefined|1,664,746|832378|
|Function returning string|1,612,879|806440|
|Function returning integer|1,665,229|832615|
|Function returning float|1,635,634|817818|
|Function returning functions|1,601,949|800975|
|Function returning arrow functions|1,604,881|802441|
|Function returning empty object|1,634,527|817264|
|Function returning empty array|1,620,381|810191|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:56:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1655530.2252719938,"samples":827766},{"name":"Function returning explicitly undefined","opsSec":1634714.0154569459,"samples":817358},{"name":"Function returning implicitly undefined","opsSec":1664746.1613502896,"samples":832378},{"name":"Function returning string","opsSec":1612879.7258104887,"samples":806440},{"name":"Function returning integer","opsSec":1665229.7701968327,"samples":832615},{"name":"Function returning float","opsSec":1635634.7732741414,"samples":817818},{"name":"Function returning functions","opsSec":1601949.333589446,"samples":800975},{"name":"Function returning arrow functions","opsSec":1604881.0370714809,"samples":802441},{"name":"Function returning empty object","opsSec":1634527.2775418442,"samples":817264},{"name":"Function returning empty array","opsSec":1620381.4879603374,"samples":810191}]}-->

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

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,205|1103|
|{...smallObject} - Total keys: 2|12,255,960|6127981|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,497|1249|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,910|3456|
|{ ...bigObject, ...anotherBigObject }|1,389|695|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,899,037|3449519|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,479,867|5239934|
|{ ...smallObject, ...anotherSmallObject }|8,983,302|4491652|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:43:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2205.0420062701287,"samples":1103},{"name":"{...smallObject} - Total keys: 2","opsSec":12255960.700874893,"samples":6127981},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2497.514912673477,"samples":1249},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6910.821359417397,"samples":3456},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1389.5093503532992,"samples":695},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6899037.227315487,"samples":3449519},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10479867.434065882,"samples":5239934},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8983302.454865148,"samples":4491652}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,112,161|7556081|
|Using backtick (`)|15,350,151|7675076|
|Using array.join|6,291,090|3145546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:02:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15112161.455959622,"samples":7556081},{"name":"Using backtick (`)","opsSec":15350151.539478293,"samples":7675076},{"name":"Using array.join","opsSec":6291090.741776071,"samples":3145546}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,567,376|7283689|
|(short string) (true) String#slice and strict comparison|15,231,253|7615627|
|(long string) (true) String#endsWith|14,136,945|7068473|
|(long string) (true) String#slice and strict comparison|15,240,708|7620355|
|(short string) (false) String#endsWith|15,123,365|7561683|
|(short string) (false) String#slice and strict comparison|15,370,006|7685004|
|(long string) (false) String#endsWith|14,940,208|7470105|
|(long string) (false) String#slice and strict comparison|15,426,120|7713061|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:14:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14567376.922044268,"samples":7283689},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15231253.207975924,"samples":7615627},{"name":"(long string) (true) String#endsWith","opsSec":14136945.321414309,"samples":7068473},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15240708.018717766,"samples":7620355},{"name":"(short string) (false) String#endsWith","opsSec":15123365.818547716,"samples":7561683},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15370006.95484208,"samples":7685004},{"name":"(long string) (false) String#endsWith","opsSec":14940208.356643053,"samples":7470105},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15426120.364875583,"samples":7713061}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,336,130|7668066|
|Using indexof|15,334,515|7667258|
|Using RegExp.test|7,501,180|3750591|
|Using RegExp.text with cached regex pattern|7,429,341|3714671|
|Using new RegExp.test|3,571,064|1785533|
|Using new RegExp.test with cached regex pattern|3,698,560|1849281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:23:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15336130.92646412,"samples":7668066},{"name":"Using indexof","opsSec":15334515.29463691,"samples":7667258},{"name":"Using RegExp.test","opsSec":7501180.439767885,"samples":3750591},{"name":"Using RegExp.text with cached regex pattern","opsSec":7429341.524514332,"samples":3714671},{"name":"Using new RegExp.test","opsSec":3571064.235892566,"samples":1785533},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3698560.786873387,"samples":1849281}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,543,157|7271579|
|(short string) (true) String#slice and strict comparison|15,248,827|7624414|
|(long string) (true) String#startsWith|14,089,452|7044727|
|(long string) (true) String#slice and strict comparison|15,231,700|7615851|
|(short string) (false) String#startsWith|15,096,166|7548084|
|(short string) (false) String#slice and strict comparison|15,211,600|7605801|
|(long string) (false) String#startsWith|14,719,958|7359980|
|(long string) (false) String#slice and strict comparison|15,291,896|7645949|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:34:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14543157.563703472,"samples":7271579},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15248827.420517124,"samples":7624414},{"name":"(long string) (true) String#startsWith","opsSec":14089452.985520342,"samples":7044727},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15231700.29404561,"samples":7615851},{"name":"(short string) (false) String#startsWith","opsSec":15096166.460283315,"samples":7548084},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15211600.478871202,"samples":7605801},{"name":"(long string) (false) String#startsWith","opsSec":14719958.67512391,"samples":7359980},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15291896.1955286,"samples":7645949}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,958,115|7479058|
|Using this|15,114,229|7557115|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:41:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":14958115.341845267,"samples":7479058},{"name":"Using this","opsSec":15114229.969732543,"samples":7557115}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,742,213|3371107|
|Date.now()|8,935,982|4467992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:46:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6742213.190934608,"samples":3371107},{"name":"Date.now()","opsSec":8935982.35576498,"samples":4467992}]}-->
