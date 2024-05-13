## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,945,634|8472818|
|Using dot notation|16,848,204|8424103|
|Using define property (writable)|3,327,114|1663558|
|Using define property initialized (writable)|4,067,158|2033580|
|Using define property (getter)|2,096,281|1048141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:24:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16945634.771793135,"samples":8472818},{"name":"Using dot notation","opsSec":16848204.369128473,"samples":8424103},{"name":"Using define property (writable)","opsSec":3327114.3357701595,"samples":1663558},{"name":"Using define property initialized (writable)","opsSec":4067158.3011099473,"samples":2033580},{"name":"Using define property (getter)","opsSec":2096281.2523105734,"samples":1048141}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.405ms
new Array(length)|10,000|0.156ms
array.push|1,000,000|26.077ms
new Array(length)|1,000,000|17.131ms
array.push|100,000,000|2,139.886ms
new Array(length)|100,000,000|4,225.469ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.018ms
array.push|100|0.014ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.483ms
new Array(length)|10,000|3.085ms
array.push|1,000,000|254.774ms
new Array(length)|1,000,000|4.546ms
array.push|100,000,000|2,607.286ms
new Array(length)|100,000,000|4,635.393ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|227|114|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:50:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":227.11073542428645,"samples":114},{"name":"Array.from","opsSec":22.309700215211834,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|293,154|146578|
|[True conditional] Using constructor name|306,668|153335|
|[True conditional] Check if property is valid then instanceof |306,934|153468|
|[False conditional] Using instanceof only|13,229,753|6614877|
|[False conditional] Using constructor name|16,814,169|8407085|
|[False conditional] Check if property is valid then instanceof |16,534,930|8267466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:45:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":293154.1392980822,"samples":146578},{"name":"[True conditional] Using constructor name","opsSec":306668.9687778626,"samples":153335},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":306934.3935776215,"samples":153468},{"name":"[False conditional] Using instanceof only","opsSec":13229753.489016518,"samples":6614877},{"name":"[False conditional] Using constructor name","opsSec":16814169.206255555,"samples":8407085},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16534930.770022774,"samples":8267466}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,873|3437|
|crypto.verify('RSA-SHA256')|6,942|3472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:52:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6873.533502151063,"samples":3437},{"name":"crypto.verify('RSA-SHA256')","opsSec":6942.81151455895,"samples":3472}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,013,749|506875|
|Using brackets {}|1,062,495|531248|
|Using '' + |1,062,947|531474|
|Using date.toString()|1,154,785|577393|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:07:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1013749.3111644895,"samples":506875},{"name":"Using brackets {}","opsSec":1062495.7005772786,"samples":531248},{"name":"Using '' + ","opsSec":1062947.6634496457,"samples":531474},{"name":"Using date.toString()","opsSec":1154785.6635560796,"samples":577393}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,875,684|1437843|
|Using delete property (proto: null)|8,631,661|4315831|
|Using delete property (cached proto: null)|2,869,649|1434825|
|Using undefined assignment|15,840,448|7920225|
|Using undefined assignment (proto: null)|9,085,714|4542858|
|Using undefined property (cached proto: null)|15,748,995|7874500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:18:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2875684.0638189805,"samples":1437843},{"name":"Using delete property (proto: null)","opsSec":8631661.419658538,"samples":4315831},{"name":"Using delete property (cached proto: null)","opsSec":2869649.6565427473,"samples":1434825},{"name":"Using undefined assignment","opsSec":15840448.089011496,"samples":7920225},{"name":"Using undefined assignment (proto: null)","opsSec":9085714.838915072,"samples":4542858},{"name":"Using undefined property (cached proto: null)","opsSec":15748995.141220164,"samples":7874500}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|304,572|152287|
|NodeError|301,386|150694|
|NodeError Range|309,234|154618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:27:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":304572.87285706226,"samples":152287},{"name":"NodeError","opsSec":301386.15703579056,"samples":150694},{"name":"NodeError Range","opsSec":309234.4371300701,"samples":154618}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,488,304|744153|
|Function returning explicitly undefined|1,462,248|731125|
|Function returning implicitly undefined|1,495,015|747508|
|Function returning string|1,478,354|739178|
|Function returning integer|1,511,774|755888|
|Function returning float|1,485,945|742973|
|Function returning functions|1,464,998|732500|
|Function returning arrow functions|1,497,954|748978|
|Function returning empty object|1,514,586|757294|
|Function returning empty array|1,517,224|758613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:32:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1488304.2385773086,"samples":744153},{"name":"Function returning explicitly undefined","opsSec":1462248.684280745,"samples":731125},{"name":"Function returning implicitly undefined","opsSec":1495015.2151204338,"samples":747508},{"name":"Function returning string","opsSec":1478354.2108769477,"samples":739178},{"name":"Function returning integer","opsSec":1511774.1711525572,"samples":755888},{"name":"Function returning float","opsSec":1485945.7534231558,"samples":742973},{"name":"Function returning functions","opsSec":1464998.1585811873,"samples":732500},{"name":"Function returning arrow functions","opsSec":1497954.4642972478,"samples":748978},{"name":"Function returning empty object","opsSec":1514586.7736852926,"samples":757294},{"name":"Function returning empty array","opsSec":1517224.3938988904,"samples":758613}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,990,600|8495301|
|using Array.includes (first item)|16,921,895|8460948|
|Using raw comparison|16,926,207|8463104|
|Using raw comparison (first item)|16,974,075|8487038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:39:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16990600.20141161,"samples":8495301},{"name":"using Array.includes (first item)","opsSec":16921895.225377113,"samples":8460948},{"name":"Using raw comparison","opsSec":16926207.98385791,"samples":8463104},{"name":"Using raw comparison (first item)","opsSec":16974075.044923373,"samples":8487038}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,708,662|7354332|
|Using Object.getOwnPropertyNames()|14,972,950|7486476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:47:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14708662.681436261,"samples":7354332},{"name":"Using Object.getOwnPropertyNames()","opsSec":14972950.914771779,"samples":7486476}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|9,356,569|4678285|
|Length = 10_000 - Array.at|9,714,448|4857225|
|Length = 1_000_000 - Array.at|9,644,741|4822372|
|Length = 100 - Array[length - 1]|17,018,066|8509034|
|Length = 10_000 - Array[length - 1]|15,966,173|7983088|
|Length = 1_000_000 - Array[length - 1]|16,857,115|8428558|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:53:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":9356569.424458763,"samples":4678285},{"name":"Length = 10_000 - Array.at","opsSec":9714448.80025757,"samples":4857225},{"name":"Length = 1_000_000 - Array.at","opsSec":9644741.994848484,"samples":4822372},{"name":"Length = 100 - Array[length - 1]","opsSec":17018066.093011126,"samples":8509034},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15966173.974871505,"samples":7983088},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16857115.115809124,"samples":8428558}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,657,930|6828966|
|Object.create({})|1,513,980|756991|
|Cached Empty.prototype|17,003,608|8501805|
|Empty.prototype|1,515,431|757716|
|Empty class|982,580|491291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:02:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13657930.528150417,"samples":6828966},{"name":"Object.create({})","opsSec":1513980.766234813,"samples":756991},{"name":"Cached Empty.prototype","opsSec":17003608.921642307,"samples":8501805},{"name":"Empty.prototype","opsSec":1515431.8706520535,"samples":757716},{"name":"Empty class","opsSec":982580.9453364811,"samples":491291}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,876,453|8438227|
|Using optional chain (obj.field?.field2) (undefined)|16,872,553|8436277|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,124,713|8062357|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,025,343|8012672|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:10:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16876453.380356357,"samples":8438227},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16872553.50922691,"samples":8436277},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16124713.05426993,"samples":8062357},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16025343.564435681,"samples":8012672}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,660,986|8330494|
|Using parseInt(x, 10) - big number (10 len)|8,929,974|4464988|
|Using + - small number (2 len)|17,201,727|8600864|
|Using + - big number (10 len)|17,199,116|8599559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16660986.47464113,"samples":8330494},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8929974.526682287,"samples":4464988},{"name":"Using + - small number (2 len)","opsSec":17201727.14694804,"samples":8600864},{"name":"Using + - big number (10 len)","opsSec":17199116.105527963,"samples":8599559}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|808,823|404412|
|Using ? operator to avoid rejection|806,500|404033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:26:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":808823.0994444194,"samples":404412},{"name":"Using ? operator to avoid rejection","opsSec":806500.7973236481,"samples":404033}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,114,997|8057499|
|Raw usage underscore usage|16,130,199|8065100|
|Manipulating private properties using #|14,721,751|7360876|
|Manipulating private properties using underscore(_)|13,996,363|6998182|
|Manipulating private properties using Symbol|14,739,837|7369919|
|Manipulating private properties using PrivateSymbol|10,644,081|5322041|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:31:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":16114997.569683142,"samples":8057499},{"name":"Raw usage underscore usage","opsSec":16130199.230852162,"samples":8065100},{"name":"Manipulating private properties using #","opsSec":14721751.677085603,"samples":7360876},{"name":"Manipulating private properties using underscore(_)","opsSec":13996363.913238177,"samples":6998182},{"name":"Manipulating private properties using Symbol","opsSec":14739837.05115223,"samples":7369919},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10644081.258977955,"samples":5322041}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,893,905|1446953|
|Adding property in the object creation - small object|2,930,953|1465477|
|Adding property after the function creation - small class|206,865|103587|
|Adding property in the function creation - small class|221,103|110552|
|Adding property after the class creation - small class|179,525|89763|
|Adding property in the class creation - small class|187,921|93961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:41:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2893905.5584250554,"samples":1446953},{"name":"Adding property in the object creation - small object","opsSec":2930953.7652052725,"samples":1465477},{"name":"Adding property after the function creation - small class","opsSec":206865.83279100741,"samples":103587},{"name":"Adding property in the function creation - small class","opsSec":221103.439532335,"samples":110552},{"name":"Adding property after the class creation - small class","opsSec":179525.1774285174,"samples":89763},{"name":"Adding property in the class creation - small class","opsSec":187921.45321240067,"samples":93961}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|17,055,131|8527566|
|Getter|13,629,380|6814691|
|Method|15,691,108|7845555|
|DefineProperty (getter)|16,140,841|8070421|
|DefineProperty (getter & enumerable=false)|13,471,438|6735720|
|DefineProperty (getter & configurable=false)|16,996,863|8498432|
|DefineProperty (getter & enumerable=false & configurable=false)|14,056,356|7028179|
|DefineProperty (writable)|17,068,809|8534405|
|DefineProperty (writable & enumerable=false)|17,031,233|8515617|
|DefineProperty (writable & enumerable=false & configurable=false)|17,078,336|8539169|
|DefineProperties (getter)|14,019,468|7009763|
|DefineProperties (getter & enumerable=false)|14,192,640|7096321|
|DefineProperties (getter & enumerable=false & configurable=false)|13,940,360|6970181|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:48:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":17055131.129820332,"samples":8527566},{"name":"Getter","opsSec":13629380.511730127,"samples":6814691},{"name":"Method","opsSec":15691108.25666989,"samples":7845555},{"name":"DefineProperty (getter)","opsSec":16140841.599779243,"samples":8070421},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13471438.567518806,"samples":6735720},{"name":"DefineProperty (getter & configurable=false)","opsSec":16996863.1652122,"samples":8498432},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14056356.10316621,"samples":7028179},{"name":"DefineProperty (writable)","opsSec":17068809.24306905,"samples":8534405},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17031233.147281896,"samples":8515617},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17078336.428288016,"samples":8539169},{"name":"DefineProperties (getter)","opsSec":14019468.702834008,"samples":7009763},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14192640.172753884,"samples":7096321},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13940360.318237705,"samples":6970181}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,879,882|8439942|
|Setter|6,017,553|3008777|
|Method|16,015,448|8007725|
|DefineProperty (setter)|16,317,960|8158981|
|DefineProperty (setter & enumerable=false)|6,026,933|3013467|
|DefineProperty (setter & configurable=false)|5,991,135|2995568|
|DefineProperty (setter & enumerable=false & configurable=false)|5,874,539|2937270|
|DefineProperty (writable)|16,026,196|8013099|
|DefineProperty (writable & enumerable=false)|16,023,815|8011908|
|DefineProperty (writable & enumerable=false & configurable=false)|16,010,185|8005093|
|DefineProperties (setter)|16,065,665|8032833|
|DefineProperties (setter & enumerable=false)|5,940,012|2970007|
|DefineProperties (setter & enumerable=false & configurable=false)|5,908,242|2954123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:08:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16879882.293621518,"samples":8439942},{"name":"Setter","opsSec":6017553.589676779,"samples":3008777},{"name":"Method","opsSec":16015448.610109497,"samples":8007725},{"name":"DefineProperty (setter)","opsSec":16317960.630542243,"samples":8158981},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6026933.169452817,"samples":3013467},{"name":"DefineProperty (setter & configurable=false)","opsSec":5991135.000121474,"samples":2995568},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5874539.57141659,"samples":2937270},{"name":"DefineProperty (writable)","opsSec":16026196.922494045,"samples":8013099},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16023815.587399462,"samples":8011908},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16010185.90075473,"samples":8005093},{"name":"DefineProperties (setter)","opsSec":16065665.685911037,"samples":8032833},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5940012.694254946,"samples":2970007},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5908242.830571563,"samples":2954123}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,497,653|5248827|
|{ ...object, __proto__: null }|10,555,593|5277797|
|{ ...object, newProp: true }|635,080|318180|
|structuredClone|271,971|135986|
|JSON.parse + JSON.stringify|187,131|93566|
|loop + object.keys starting with {}|1,195,951|597976|
|loop + object.keys starting with { __proto__: null }|743,385|371693|
|loop + object.keys starting with { randomProp: true }|558,378|279190|
|object.keys + reduce(FN, {})|1,220,057|610029|
|object.keys + reduce(FN, { __proto__: null })|749,561|374781|
|object.keys + reduce(FN, { newProp: true })|559,327|279664|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:23:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10497653.544483913,"samples":5248827},{"name":"{ ...object, __proto__: null }","opsSec":10555593.959733604,"samples":5277797},{"name":"{ ...object, newProp: true }","opsSec":635080.4265864503,"samples":318180},{"name":"structuredClone","opsSec":271971.5815027745,"samples":135986},{"name":"JSON.parse + JSON.stringify","opsSec":187131.19656310376,"samples":93566},{"name":"loop + object.keys starting with {}","opsSec":1195951.9840323185,"samples":597976},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":743385.6908987416,"samples":371693},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":558378.1018650589,"samples":279190},{"name":"object.keys + reduce(FN, {})","opsSec":1220057.9098258133,"samples":610029},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":749561.0775026602,"samples":374781},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":559327.1780059993,"samples":279664}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|271,404|135703|
|Sort using first char|1,224,797|612399|
|Sort using localeCompare|1,161,876|580939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:32:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":271404.05035494873,"samples":135703},{"name":"Sort using first char","opsSec":1224797.0188317338,"samples":612399},{"name":"Sort using localeCompare","opsSec":1161876.2104968263,"samples":580939}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,193|1097|
|{...smallObject} - Total keys: 2|13,509,521|6754761|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,472|1237|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,618|3310|
|{ ...bigObject, ...anotherBigObject }|1,326|664|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,602,938|3301470|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,948,730|5474366|
|{ ...smallObject, ...anotherSmallObject }|9,267,781|4633891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:39:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2193.0585694752904,"samples":1097},{"name":"{...smallObject} - Total keys: 2","opsSec":13509521.123909533,"samples":6754761},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2472.2708761943913,"samples":1237},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6618.705150664142,"samples":3310},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1326.791184711251,"samples":664},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6602938.221082642,"samples":3301470},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10948730.981951455,"samples":5474366},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9267781.96906544,"samples":4633891}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|17,119,984|8559993|
|Using backtick (`)|17,293,673|8646837|
|Using array.join|6,640,334|3320168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:57:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":17119984.538743384,"samples":8559993},{"name":"Using backtick (`)","opsSec":17293673.967014935,"samples":8646837},{"name":"Using array.join","opsSec":6640334.628966859,"samples":3320168}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,439,378|7219690|
|(short string) (true) String#slice and strict comparison|16,876,777|8438389|
|(long string) (true) String#endsWith|13,974,666|6987334|
|(long string) (true) String#slice and strict comparison|16,927,430|8463716|
|(short string) (false) String#endsWith|14,591,479|7295740|
|(short string) (false) String#slice and strict comparison|17,091,538|8545770|
|(long string) (false) String#endsWith|14,403,872|7201937|
|(long string) (false) String#slice and strict comparison|16,691,320|8345661|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:06:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14439378.63672401,"samples":7219690},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16876777.718338385,"samples":8438389},{"name":"(long string) (true) String#endsWith","opsSec":13974666.72058105,"samples":6987334},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16927430.966831606,"samples":8463716},{"name":"(short string) (false) String#endsWith","opsSec":14591479.255519733,"samples":7295740},{"name":"(short string) (false) String#slice and strict comparison","opsSec":17091538.54117136,"samples":8545770},{"name":"(long string) (false) String#endsWith","opsSec":14403872.8529936,"samples":7201937},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16691320.471863972,"samples":8345661}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,213,185|8606593|
|Using indexof|17,104,717|8552359|
|Using RegExp.test|8,482,732|4241367|
|Using RegExp.text with cached regex pattern|8,573,415|4286708|
|Using new RegExp.test|3,055,282|1527642|
|Using new RegExp.test with cached regex pattern|3,211,013|1605507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:18:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17213185.60602145,"samples":8606593},{"name":"Using indexof","opsSec":17104717.453536954,"samples":8552359},{"name":"Using RegExp.test","opsSec":8482732.924061319,"samples":4241367},{"name":"Using RegExp.text with cached regex pattern","opsSec":8573415.280490356,"samples":4286708},{"name":"Using new RegExp.test","opsSec":3055282.4251211635,"samples":1527642},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3211013.082852918,"samples":1605507}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,861,372|7930687|
|(short string) (true) String#slice and strict comparison|16,716,990|8358496|
|(long string) (true) String#startsWith|14,573,066|7286534|
|(long string) (true) String#slice and strict comparison|16,283,576|8141789|
|(short string) (false) String#startsWith|16,341,504|8170753|
|(short string) (false) String#slice and strict comparison|16,886,867|8443434|
|(long string) (false) String#startsWith|16,257,895|8128948|
|(long string) (false) String#slice and strict comparison|16,750,011|8375007|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:27:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15861372.562974555,"samples":7930687},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16716990.716623541,"samples":8358496},{"name":"(long string) (true) String#startsWith","opsSec":14573066.075132703,"samples":7286534},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16283576.136492599,"samples":8141789},{"name":"(short string) (false) String#startsWith","opsSec":16341504.09090209,"samples":8170753},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16886867.35581713,"samples":8443434},{"name":"(long string) (false) String#startsWith","opsSec":16257895.054211047,"samples":8128948},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16750011.94733378,"samples":8375007}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,553,359|8276680|
|Using this|16,831,811|8415906|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:38:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":16553359.8894944,"samples":8276680},{"name":"Using this","opsSec":16831811.012797948,"samples":8415906}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,514,192|3257097|
|Date.now()|9,090,269|4545135|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:44:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6514192.496594826,"samples":3257097},{"name":"Date.now()","opsSec":9090269.778936502,"samples":4545135}]}-->
