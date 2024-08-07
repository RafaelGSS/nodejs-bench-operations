## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,091,475|8045738|
|Using dot notation|16,195,882|8097942|
|Using define property (writable)|3,341,708|1670855|
|Using define property initialized (writable)|4,022,149|2011075|
|Using define property (getter)|2,040,142|1020102|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:39:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16091475.872417415,"samples":8045738},{"name":"Using dot notation","opsSec":16195882.510573635,"samples":8097942},{"name":"Using define property (writable)","opsSec":3341708.1888498114,"samples":1670855},{"name":"Using define property initialized (writable)","opsSec":4022149.3403320494,"samples":2011075},{"name":"Using define property (getter)","opsSec":2040142.1020623841,"samples":1020102}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.008ms
array.push|1,000|0.078ms
new Array(length)|1,000|0.043ms
array.push|10,000|0.316ms
new Array(length)|10,000|0.423ms
array.push|1,000,000|33.993ms
new Array(length)|1,000,000|9.355ms
array.push|100,000,000|2,387.278ms
new Array(length)|100,000,000|4,602.077ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.024ms
new Array(length)|100|0.01ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.291ms
new Array(length)|10,000|0.253ms
array.push|1,000,000|27.314ms
new Array(length)|1,000,000|4.535ms
array.push|100,000,000|2,323.989ms
new Array(length)|100,000,000|5,052.399ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|227|114|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:50:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":227.88167380819934,"samples":114},{"name":"Array.from","opsSec":23.484216436224216,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,670|2836|
|new Blob (1024)|703|352|
|text (128)|6,071|3036|
|text (1024)|774|388|
|arrayBuffer (128)|6,087|3044|
|arrayBuffer (1024)|774|388|
|slice (0, 64)|79,767|39884|
|slice (0, 512)|25,412|12707|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:53:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5670.6490697708705,"samples":2836},{"name":"new Blob (1024)","opsSec":703.4885216358247,"samples":352},{"name":"text (128)","opsSec":6071.276558789721,"samples":3036},{"name":"text (1024)","opsSec":774.2791985460547,"samples":388},{"name":"arrayBuffer (128)","opsSec":6087.780925086025,"samples":3044},{"name":"arrayBuffer (1024)","opsSec":774.2646916571953,"samples":388},{"name":"slice (0, 64)","opsSec":79767.78685981633,"samples":39884},{"name":"slice (0, 512)","opsSec":25412.644793519692,"samples":12707}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|310,116|155059|
|[True conditional] Using constructor name|304,587|152294|
|[True conditional] Check if property is valid then instanceof |308,364|154183|
|[False conditional] Using instanceof only|12,476,423|6238212|
|[False conditional] Using constructor name|15,961,666|7980834|
|[False conditional] Check if property is valid then instanceof |15,994,588|7997295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:58:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":310116.87307103566,"samples":155059},{"name":"[True conditional] Using constructor name","opsSec":304587.40726356977,"samples":152294},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":308364.56916874496,"samples":154183},{"name":"[False conditional] Using instanceof only","opsSec":12476423.501723582,"samples":6238212},{"name":"[False conditional] Using constructor name","opsSec":15961666.43517246,"samples":7980834},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15994588.17361639,"samples":7997295}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,731|3366|
|crypto.verify('RSA-SHA256')|6,947|3474|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:03:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6731.932330636995,"samples":3366},{"name":"crypto.verify('RSA-SHA256')","opsSec":6947.3069922098,"samples":3474}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,327,206|663604|
|fromUnixToISOString(new Date())|1,835,718|917860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:08:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1327206.7048360158,"samples":663604},{"name":"fromUnixToISOString(new Date())","opsSec":1835718.2127431065,"samples":917860}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,871|5436|
|Intl.DateTimeFormat().format(new Date())|10,369|5185|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,224|5613|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,578|5290|
|Reusing Intl.DateTimeFormat()|666,775|333388|
|Date.toLocaleDateString()|682,453|341227|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|15,987|7994|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:12:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10871.898086917025,"samples":5436},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10369.77030963015,"samples":5185},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11224.875761125037,"samples":5613},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10578.276629632372,"samples":5290},{"name":"Reusing Intl.DateTimeFormat()","opsSec":666775.885142904,"samples":333388},{"name":"Date.toLocaleDateString()","opsSec":682453.0282932573,"samples":341227},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":15987.581637947162,"samples":7994}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,032,561|516281|
|Using brackets {}|1,046,037|523019|
|Using '' + |1,041,133|520567|
|Using date.toString()|1,154,776|577402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:16:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1032561.1549099352,"samples":516281},{"name":"Using brackets {}","opsSec":1046037.6004899911,"samples":523019},{"name":"Using '' + ","opsSec":1041133.6732614039,"samples":520567},{"name":"Using date.toString()","opsSec":1154776.6832207341,"samples":577402}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,011,098|1505550|
|Using delete property (proto: null)|8,044,153|4022077|
|Using delete property (cached proto: null)|2,995,570|1497786|
|Using undefined assignment|16,257,183|8128592|
|Using undefined assignment (proto: null)|9,262,193|4631097|
|Using undefined property (cached proto: null)|16,272,222|8136112|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:23:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3011098.987096446,"samples":1505550},{"name":"Using delete property (proto: null)","opsSec":8044153.642878063,"samples":4022077},{"name":"Using delete property (cached proto: null)","opsSec":2995570.227599316,"samples":1497786},{"name":"Using undefined assignment","opsSec":16257183.40778737,"samples":8128592},{"name":"Using undefined assignment (proto: null)","opsSec":9262193.052475827,"samples":4631097},{"name":"Using undefined property (cached proto: null)","opsSec":16272222.178694457,"samples":8136112}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|300,384|150193|
|NodeError|295,667|147834|
|NodeError Range|290,693|145347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:28:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":300384.6729042578,"samples":150193},{"name":"NodeError","opsSec":295667.967495689,"samples":147834},{"name":"NodeError Range","opsSec":290693.5872384945,"samples":145347}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,505,793|752897|
|Function returning explicitly undefined|1,514,978|757490|
|Function returning implicitly undefined|1,540,660|770331|
|Function returning string|1,491,927|745964|
|Function returning integer|1,543,663|771832|
|Function returning float|1,516,975|758488|
|Function returning functions|1,466,687|733344|
|Function returning arrow functions|1,483,502|741752|
|Function returning empty object|1,508,136|754069|
|Function returning empty array|1,495,883|747942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:31:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1505793.5608378365,"samples":752897},{"name":"Function returning explicitly undefined","opsSec":1514978.3548599558,"samples":757490},{"name":"Function returning implicitly undefined","opsSec":1540660.4322866185,"samples":770331},{"name":"Function returning string","opsSec":1491927.3135623161,"samples":745964},{"name":"Function returning integer","opsSec":1543663.6476179021,"samples":771832},{"name":"Function returning float","opsSec":1516975.4417431355,"samples":758488},{"name":"Function returning functions","opsSec":1466687.9147436337,"samples":733344},{"name":"Function returning arrow functions","opsSec":1483502.694797828,"samples":741752},{"name":"Function returning empty object","opsSec":1508136.536715082,"samples":754069},{"name":"Function returning empty array","opsSec":1495883.713101599,"samples":747942}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,246,136|8123069|
|using Array.includes (first item)|16,183,299|8091650|
|Using raw comparison|16,273,343|8136672|
|Using raw comparison (first item)|16,033,674|8016838|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:37:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16246136.419600127,"samples":8123069},{"name":"using Array.includes (first item)","opsSec":16183299.565492995,"samples":8091650},{"name":"Using raw comparison","opsSec":16273343.219449496,"samples":8136672},{"name":"Using raw comparison (first item)","opsSec":16033674.649248753,"samples":8016838}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,248,632|7124317|
|Using Object.getOwnPropertyNames()|13,914,248|6957125|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:44:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14248632.241197813,"samples":7124317},{"name":"Using Object.getOwnPropertyNames()","opsSec":13914248.996663239,"samples":6957125}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,004,157|8002079|
|Length = 10_000 - Array.at|15,908,343|7954172|
|Length = 1_000_000 - Array.at|16,078,944|8039473|
|Length = 100 - Array[length - 1]|16,116,127|8058064|
|Length = 10_000 - Array[length - 1]|16,116,245|8058123|
|Length = 1_000_000 - Array[length - 1]|16,123,630|8061816|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:50:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16004157.48300402,"samples":8002079},{"name":"Length = 10_000 - Array.at","opsSec":15908343.709017694,"samples":7954172},{"name":"Length = 1_000_000 - Array.at","opsSec":16078944.732782323,"samples":8039473},{"name":"Length = 100 - Array[length - 1]","opsSec":16116127.878034318,"samples":8058064},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16116245.204410525,"samples":8058123},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16123630.806564434,"samples":8061816}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,625,513|7812757|
|~ (small)|15,683,567|7841784|
|Math.floor (long)|15,730,292|7865147|
|~ (long)|15,701,224|7850613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:24:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":15625513.062542114,"samples":7812757},{"name":"~ (small)","opsSec":15683567.092317142,"samples":7841784},{"name":"Math.floor (long)","opsSec":15730292.992416702,"samples":7865147},{"name":"~ (long)","opsSec":15701224.334761895,"samples":7850613}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,569,620|6784811|
|Object.create({})|1,987,577|993789|
|Cached Empty.prototype|16,088,374|8044188|
|Empty.prototype|1,679,925|839963|
|Empty class|1,313,513|656757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:56:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13569620.863011925,"samples":6784811},{"name":"Object.create({})","opsSec":1987577.1798513844,"samples":993789},{"name":"Cached Empty.prototype","opsSec":16088374.231801163,"samples":8044188},{"name":"Empty.prototype","opsSec":1679925.492349639,"samples":839963},{"name":"Empty class","opsSec":1313513.6994755636,"samples":656757}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,141,683|8070842|
|Using optional chain (obj.field?.field2) (undefined)|16,152,213|8076108|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,211,836|8105919|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,080,815|8040408|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:03:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16141683.760823147,"samples":8070842},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16152213.898383532,"samples":8076108},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16211836.59738425,"samples":8105919},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16080815.100575754,"samples":8040408}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,185,097|8092549|
|Using parseInt(x, 10) - big number (10 len)|16,114,578|8057290|
|Using + - small number (2 len)|16,173,138|8086570|
|Using + - big number (10 len)|16,111,096|8055549|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:09:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16185097.308636717,"samples":8092549},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16114578.897942008,"samples":8057290},{"name":"Using + - small number (2 len)","opsSec":16173138.75485088,"samples":8086570},{"name":"Using + - big number (10 len)","opsSec":16111096.351321513,"samples":8055549}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,035,458|517730|
|Using ? operator to avoid rejection|1,039,721|519861|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:14:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1035458.9397031876,"samples":517730},{"name":"Using ? operator to avoid rejection","opsSec":1039721.5012610434,"samples":519861}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,008,323|8004162|
|Raw usage underscore usage|16,025,939|8012970|
|Manipulating private properties using #|16,080,756|8040379|
|Manipulating private properties using underscore(_)|16,118,076|8059039|
|Manipulating private properties using Symbol|16,068,997|8034499|
|Manipulating private properties using PrivateSymbol|12,458,543|6229272|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:20:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":16008323.87434768,"samples":8004162},{"name":"Raw usage underscore usage","opsSec":16025939.849493079,"samples":8012970},{"name":"Manipulating private properties using #","opsSec":16080756.911517289,"samples":8040379},{"name":"Manipulating private properties using underscore(_)","opsSec":16118076.850657908,"samples":8059039},{"name":"Manipulating private properties using Symbol","opsSec":16068997.921850573,"samples":8034499},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12458543.259362245,"samples":6229272}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,756,869|1878435|
|Adding property in the object creation - small object|3,765,065|1882533|
|Adding property after the function creation - small class|261,133|130567|
|Adding property in the function creation - small class|257,120|128561|
|Adding property after the class creation - small class|220,558|110280|
|Adding property in the class creation - small class|223,913|111957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:26:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3756869.090262193,"samples":1878435},{"name":"Adding property in the object creation - small object","opsSec":3765065.7191791856,"samples":1882533},{"name":"Adding property after the function creation - small class","opsSec":261133.2150612615,"samples":130567},{"name":"Adding property in the function creation - small class","opsSec":257120.9263300269,"samples":128561},{"name":"Adding property after the class creation - small class","opsSec":220558.74853920727,"samples":110280},{"name":"Adding property in the class creation - small class","opsSec":223913.37755423257,"samples":111957}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,938,292|7969147|
|Getter|13,571,051|6785526|
|Method|14,648,302|7324152|
|DefineProperty (getter)|15,963,228|7981615|
|DefineProperty (getter & enumerable=false)|13,362,968|6681485|
|DefineProperty (getter & configurable=false)|15,960,782|7980392|
|DefineProperty (getter & enumerable=false & configurable=false)|13,341,221|6670611|
|DefineProperty (writable)|15,944,174|7972088|
|DefineProperty (writable & enumerable=false)|16,000,675|8000339|
|DefineProperty (writable & enumerable=false & configurable=false)|16,014,214|8007108|
|DefineProperties (getter)|13,834,562|6917282|
|DefineProperties (getter & enumerable=false)|13,876,103|6938052|
|DefineProperties (getter & enumerable=false & configurable=false)|13,541,159|6770580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:37:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15938292.092348179,"samples":7969147},{"name":"Getter","opsSec":13571051.55161789,"samples":6785526},{"name":"Method","opsSec":14648302.056191327,"samples":7324152},{"name":"DefineProperty (getter)","opsSec":15963228.35090233,"samples":7981615},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13362968.139238408,"samples":6681485},{"name":"DefineProperty (getter & configurable=false)","opsSec":15960782.787253698,"samples":7980392},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13341221.933228152,"samples":6670611},{"name":"DefineProperty (writable)","opsSec":15944174.611662023,"samples":7972088},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16000675.978959532,"samples":8000339},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16014214.63870309,"samples":8007108},{"name":"DefineProperties (getter)","opsSec":13834562.41413155,"samples":6917282},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13876103.958956143,"samples":6938052},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13541159.503421878,"samples":6770580}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,714,785|7857394|
|Setter|6,388,693|3194347|
|Method|15,061,979|7530990|
|DefineProperty (setter)|15,268,147|7634074|
|DefineProperty (setter & enumerable=false)|6,452,803|3226402|
|DefineProperty (setter & configurable=false)|6,467,911|3233956|
|DefineProperty (setter & enumerable=false & configurable=false)|6,299,219|3149610|
|DefineProperty (writable)|15,347,678|7673840|
|DefineProperty (writable & enumerable=false)|15,327,340|7663671|
|DefineProperty (writable & enumerable=false & configurable=false)|15,922,220|7961111|
|DefineProperties (setter)|15,895,605|7947803|
|DefineProperties (setter & enumerable=false)|6,134,260|3067131|
|DefineProperties (setter & enumerable=false & configurable=false)|6,110,227|3055114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:46:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15714785.575799325,"samples":7857394},{"name":"Setter","opsSec":6388693.655177489,"samples":3194347},{"name":"Method","opsSec":15061979.558356252,"samples":7530990},{"name":"DefineProperty (setter)","opsSec":15268147.584873859,"samples":7634074},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6452803.902415435,"samples":3226402},{"name":"DefineProperty (setter & configurable=false)","opsSec":6467911.840058391,"samples":3233956},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6299219.576595356,"samples":3149610},{"name":"DefineProperty (writable)","opsSec":15347678.187109157,"samples":7673840},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15327340.46906717,"samples":7663671},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15922220.295912787,"samples":7961111},{"name":"DefineProperties (setter)","opsSec":15895605.45699162,"samples":7947803},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6134260.877263176,"samples":3067131},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6110227.617762874,"samples":3055114}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,835,307|1417655|
|Using replaceAll()|2,466,559|1233280|
|Using replaceAll(//g)|2,603,206|1301604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:55:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2835307.093327978,"samples":1417655},{"name":"Using replaceAll()","opsSec":2466559.2444081856,"samples":1233280},{"name":"Using replaceAll(//g)","opsSec":2603206.7409862936,"samples":1301604}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,445,275|4722639|
|{ ...object, __proto__: null }|10,084,973|5042487|
|{ ...object, newProp: true }|685,598|342801|
|structuredClone|273,877|136939|
|JSON.parse + JSON.stringify|184,920|92461|
|loop + object.keys starting with {}|1,412,652|706327|
|loop + object.keys starting with { __proto__: null }|764,823|382412|
|loop + object.keys starting with { randomProp: true }|603,694|301848|
|object.keys + reduce(FN, {})|1,407,841|703921|
|object.keys + reduce(FN, { __proto__: null })|770,476|385239|
|object.keys + reduce(FN, { newProp: true })|621,010|310506|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:00:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":9445275.92241932,"samples":4722639},{"name":"{ ...object, __proto__: null }","opsSec":10084973.778978897,"samples":5042487},{"name":"{ ...object, newProp: true }","opsSec":685598.7466174625,"samples":342801},{"name":"structuredClone","opsSec":273877.3211667752,"samples":136939},{"name":"JSON.parse + JSON.stringify","opsSec":184920.57277051572,"samples":92461},{"name":"loop + object.keys starting with {}","opsSec":1412652.2910322759,"samples":706327},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":764823.7055846156,"samples":382412},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":603694.9675548322,"samples":301848},{"name":"object.keys + reduce(FN, {})","opsSec":1407841.1885056375,"samples":703921},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":770476.4069892403,"samples":385239},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":621010.1406302964,"samples":310506}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|270,303|135152|
|Sort using first char|1,312,674|656373|
|Sort using localeCompare|1,245,377|622689|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:05:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":270303.0155130486,"samples":135152},{"name":"Sort using first char","opsSec":1312674.9286427968,"samples":656373},{"name":"Sort using localeCompare","opsSec":1245377.1705695891,"samples":622689}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,253|1127|
|{...smallObject} - Total keys: 2|11,515,023|5757512|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,446|1224|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,452|3227|
|{ ...bigObject, ...anotherBigObject }|1,341|671|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,922,414|3461208|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,538,857|5269429|
|{ ...smallObject, ...anotherSmallObject }|7,993,568|3996785|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:10:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2253.834275633551,"samples":1127},{"name":"{...smallObject} - Total keys: 2","opsSec":11515023.809752664,"samples":5757512},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2446.0167012241013,"samples":1224},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6452.221160849094,"samples":3227},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1341.659789967015,"samples":671},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6922414.21890003,"samples":3461208},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10538857.83652009,"samples":5269429},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7993568.806721385,"samples":3996785}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,404|1203|
|streams.web.Readable reading 1e3 * "some data"|629|315|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:16:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2404.4980880412104,"samples":1203},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":629.2573316364425,"samples":315}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,599|3300|
|streams.web.WritableStream writing 1e3 * "some data"|2,702|1352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:21:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6599.700637807327,"samples":3300},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2702.7840119015996,"samples":1352}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,799,171|7899586|
|Using backtick (`)|15,847,250|7923626|
|Using array.join|6,020,422|3010212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:25:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15799171.943556616,"samples":7899586},{"name":"Using backtick (`)","opsSec":15847250.508288242,"samples":7923626},{"name":"Using array.join","opsSec":6020422.278485338,"samples":3010212}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,682,011|6341006|
|(short string) (true) String#slice and strict comparison|15,719,579|7859790|
|(long string) (true) String#endsWith|12,423,779|6211890|
|(long string) (true) String#slice and strict comparison|15,950,526|7975264|
|(short string) (false) String#endsWith|13,845,019|6922510|
|(short string) (false) String#slice and strict comparison|15,909,568|7954785|
|(long string) (false) String#endsWith|13,573,258|6786630|
|(long string) (false) String#slice and strict comparison|15,890,939|7945470|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:33:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12682011.55590476,"samples":6341006},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15719579.437004192,"samples":7859790},{"name":"(long string) (true) String#endsWith","opsSec":12423779.251663363,"samples":6211890},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15950526.777069926,"samples":7975264},{"name":"(short string) (false) String#endsWith","opsSec":13845019.83201463,"samples":6922510},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15909568.513801618,"samples":7954785},{"name":"(long string) (false) String#endsWith","opsSec":13573258.820334194,"samples":6786630},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15890939.89835641,"samples":7945470}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,064,513|8032257|
|Using indexof|15,974,843|7987422|
|Using RegExp.test|7,933,169|3966585|
|Using RegExp.text with cached regex pattern|7,777,411|3888706|
|Using new RegExp.test|3,479,124|1739563|
|Using new RegExp.test with cached regex pattern|3,792,056|1896029|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:41:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16064513.451281415,"samples":8032257},{"name":"Using indexof","opsSec":15974843.394297764,"samples":7987422},{"name":"Using RegExp.test","opsSec":7933169.413099842,"samples":3966585},{"name":"Using RegExp.text with cached regex pattern","opsSec":7777411.785917642,"samples":3888706},{"name":"Using new RegExp.test","opsSec":3479124.127664515,"samples":1739563},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3792056.382316736,"samples":1896029}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,115,273|7557637|
|(short string) (true) String#slice and strict comparison|16,097,984|8048993|
|(long string) (true) String#startsWith|14,816,831|7408416|
|(long string) (true) String#slice and strict comparison|16,095,090|8047546|
|(short string) (false) String#startsWith|15,854,990|7927496|
|(short string) (false) String#slice and strict comparison|16,107,605|8053803|
|(long string) (false) String#startsWith|15,393,799|7696900|
|(long string) (false) String#slice and strict comparison|16,083,431|8041716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:49:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15115273.722848173,"samples":7557637},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16097984.158991277,"samples":8048993},{"name":"(long string) (true) String#startsWith","opsSec":14816831.52828645,"samples":7408416},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16095090.135638488,"samples":8047546},{"name":"(short string) (false) String#startsWith","opsSec":15854990.873168543,"samples":7927496},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16107605.086956237,"samples":8053803},{"name":"(long string) (false) String#startsWith","opsSec":15393799.576325001,"samples":7696900},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16083431.424871584,"samples":8041716}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,882,124|7441063|
|Using this|15,774,381|7887191|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:58:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":14882124.734243998,"samples":7441063},{"name":"Using this","opsSec":15774381.252696311,"samples":7887191}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,442,201|3221101|
|Date.now()|9,207,012|4603507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:02:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6442201.306306881,"samples":3221101},{"name":"Date.now()","opsSec":9207012.737735737,"samples":4603507}]}-->
