## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,061,051|8030526|
|Using dot notation|16,102,673|8051337|
|Using define property (writable)|3,538,553|1769277|
|Using define property initialized (writable)|4,447,855|2223928|
|Using define property (getter)|2,220,497|1110249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:28:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16061051.196938513,"samples":8030526},{"name":"Using dot notation","opsSec":16102673.967783893,"samples":8051337},{"name":"Using define property (writable)","opsSec":3538553.547089503,"samples":1769277},{"name":"Using define property initialized (writable)","opsSec":4447855.350609663,"samples":2223928},{"name":"Using define property (getter)","opsSec":2220497.9733600337,"samples":1110249}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.02ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.291ms
new Array(length)|10,000|0.171ms
array.push|1,000,000|21.194ms
new Array(length)|1,000,000|15.355ms
array.push|100,000,000|2,003.918ms
new Array(length)|100,000,000|4,025.903ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.343ms
new Array(length)|10,000|0.119ms
array.push|1,000,000|17.575ms
new Array(length)|1,000,000|7.383ms
array.push|100,000,000|2,597.502ms
new Array(length)|100,000,000|4,097.338ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|252|127|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:41:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":252.34223315711395,"samples":127},{"name":"Array.from","opsSec":24.16822564890688,"samples":13}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|335,096|167549|
|[True conditional] Using constructor name|336,930|168466|
|[True conditional] Check if property is valid then instanceof |342,239|171120|
|[False conditional] Using instanceof only|16,174,550|8087276|
|[False conditional] Using constructor name|16,207,703|8103852|
|[False conditional] Check if property is valid then instanceof |16,225,057|8112529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:56:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":335096.7869496035,"samples":167549},{"name":"[True conditional] Using constructor name","opsSec":336930.21898695634,"samples":168466},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":342239.9883638607,"samples":171120},{"name":"[False conditional] Using instanceof only","opsSec":16174550.285545165,"samples":8087276},{"name":"[False conditional] Using constructor name","opsSec":16207703.48136761,"samples":8103852},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16225057.967557132,"samples":8112529}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,157|3579|
|crypto.verify('RSA-SHA256')|7,136|3569|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:02:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7157.042273231158,"samples":3579},{"name":"crypto.verify('RSA-SHA256')","opsSec":7136.175365593155,"samples":3569}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,045,844|522923|
|Using brackets {}|1,066,987|533494|
|Using '' + |1,065,281|532641|
|Using date.toString()|1,160,235|580118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:17:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1045844.6236684086,"samples":522923},{"name":"Using brackets {}","opsSec":1066987.6052147849,"samples":533494},{"name":"Using '' + ","opsSec":1065281.5909313469,"samples":532641},{"name":"Using date.toString()","opsSec":1160235.5034188696,"samples":580118}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,384,837|1692419|
|Using delete property (proto: null)|9,082,113|4541057|
|Using delete property (cached proto: null)|3,308,712|1654357|
|Using undefined assignment|16,117,812|8058907|
|Using undefined assignment (proto: null)|8,615,860|4307931|
|Using undefined property (cached proto: null)|16,149,575|8074788|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:25:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3384837.6141289324,"samples":1692419},{"name":"Using delete property (proto: null)","opsSec":9082113.945510445,"samples":4541057},{"name":"Using delete property (cached proto: null)","opsSec":3308712.2000602908,"samples":1654357},{"name":"Using undefined assignment","opsSec":16117812.581603399,"samples":8058907},{"name":"Using undefined assignment (proto: null)","opsSec":8615860.173427623,"samples":4307931},{"name":"Using undefined property (cached proto: null)","opsSec":16149575.806213072,"samples":8074788}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|321,784|160893|
|NodeError|311,913|155957|
|NodeError Range|325,192|162597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:30:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":321784.22439465014,"samples":160893},{"name":"NodeError","opsSec":311913.6475375948,"samples":155957},{"name":"NodeError Range","opsSec":325192.9418222379,"samples":162597}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,620,223|810112|
|Function returning explicitly undefined|1,675,684|837843|
|Function returning implicitly undefined|1,704,154|852078|
|Function returning string|1,660,576|830289|
|Function returning integer|1,714,568|857285|
|Function returning float|1,682,814|841408|
|Function returning functions|1,665,903|832952|
|Function returning arrow functions|1,677,013|838507|
|Function returning empty object|1,698,799|849400|
|Function returning empty array|1,709,880|854941|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:36:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1620223.8185347738,"samples":810112},{"name":"Function returning explicitly undefined","opsSec":1675684.5823715522,"samples":837843},{"name":"Function returning implicitly undefined","opsSec":1704154.8616249112,"samples":852078},{"name":"Function returning string","opsSec":1660576.7977417891,"samples":830289},{"name":"Function returning integer","opsSec":1714568.117404256,"samples":857285},{"name":"Function returning float","opsSec":1682814.6874032698,"samples":841408},{"name":"Function returning functions","opsSec":1665903.2403487866,"samples":832952},{"name":"Function returning arrow functions","opsSec":1677013.9362737995,"samples":838507},{"name":"Function returning empty object","opsSec":1698799.0418759962,"samples":849400},{"name":"Function returning empty array","opsSec":1709880.676550297,"samples":854941}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,852,311|7426156|
|using Array.includes (first item)|15,284,973|7642487|
|Using raw comparison|16,243,132|8121567|
|Using raw comparison (first item)|16,173,084|8086543|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:45:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14852311.732657142,"samples":7426156},{"name":"using Array.includes (first item)","opsSec":15284973.602596363,"samples":7642487},{"name":"Using raw comparison","opsSec":16243132.408144474,"samples":8121567},{"name":"Using raw comparison (first item)","opsSec":16173084.091550073,"samples":8086543}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,108,390|7054196|
|Using Object.getOwnPropertyNames()|14,053,796|7026899|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:51:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14108390.335209623,"samples":7054196},{"name":"Using Object.getOwnPropertyNames()","opsSec":14053796.08868582,"samples":7026899}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,640,338|7820170|
|Length = 10_000 - Array.at|15,596,283|7798142|
|Length = 1_000_000 - Array.at|15,623,696|7811849|
|Length = 100 - Array[length - 1]|15,363,001|7681501|
|Length = 10_000 - Array[length - 1]|15,493,572|7746787|
|Length = 1_000_000 - Array[length - 1]|15,376,503|7688252|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:00:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15640338.842598615,"samples":7820170},{"name":"Length = 10_000 - Array.at","opsSec":15596283.563313983,"samples":7798142},{"name":"Length = 1_000_000 - Array.at","opsSec":15623696.375103652,"samples":7811849},{"name":"Length = 100 - Array[length - 1]","opsSec":15363001.139656832,"samples":7681501},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15493572.667589953,"samples":7746787},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15376503.815605072,"samples":7688252}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,169,120|6584561|
|Object.create({})|2,311,207|1155604|
|Cached Empty.prototype|15,993,734|7996868|
|Empty.prototype|2,188,962|1099155|
|Empty class|1,234,819|617410|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:08:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13169120.867450844,"samples":6584561},{"name":"Object.create({})","opsSec":2311207.69492207,"samples":1155604},{"name":"Cached Empty.prototype","opsSec":15993734.304680694,"samples":7996868},{"name":"Empty.prototype","opsSec":2188962.9138413616,"samples":1099155},{"name":"Empty class","opsSec":1234819.199836389,"samples":617410}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,096,421|8048211|
|Using optional chain (obj.field?.field2) (undefined)|16,192,882|8096442|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,207,585|8103793|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,218,596|8109299|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:16:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16096421.130809207,"samples":8048211},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16192882.445473215,"samples":8096442},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16207585.027573165,"samples":8103793},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16218596.313320698,"samples":8109299}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,118,999|8059500|
|Using parseInt(x, 10) - big number (10 len)|16,161,875|8080938|
|Using + - small number (2 len)|16,170,290|8085146|
|Using + - big number (10 len)|16,043,871|8021936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:24:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16118999.322996523,"samples":8059500},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16161875.450463885,"samples":8080938},{"name":"Using + - small number (2 len)","opsSec":16170290.188926004,"samples":8085146},{"name":"Using + - big number (10 len)","opsSec":16043871.550831446,"samples":8021936}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,291,014|645508|
|Using ? operator to avoid rejection|1,211,602|605802|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:29:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1291014.5488996017,"samples":645508},{"name":"Using ? operator to avoid rejection","opsSec":1211602.6163500026,"samples":605802}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,890,121|7945061|
|Raw usage underscore usage|15,910,655|7955328|
|Manipulating private properties using #|15,886,794|7943398|
|Manipulating private properties using underscore(_)|15,937,886|7968944|
|Manipulating private properties using Symbol|15,916,786|7958394|
|Manipulating private properties using PrivateSymbol|12,074,952|6037477|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:38:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15890121.046564277,"samples":7945061},{"name":"Raw usage underscore usage","opsSec":15910655.713584166,"samples":7955328},{"name":"Manipulating private properties using #","opsSec":15886794.125375748,"samples":7943398},{"name":"Manipulating private properties using underscore(_)","opsSec":15937886.310589798,"samples":7968944},{"name":"Manipulating private properties using Symbol","opsSec":15916786.663032435,"samples":7958394},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12074952.430210054,"samples":6037477}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,010,512|2005257|
|Adding property in the object creation - small object|4,013,824|2006913|
|Adding property after the function creation - small class|295,172|147587|
|Adding property in the function creation - small class|315,489|157745|
|Adding property after the class creation - small class|310,888|155445|
|Adding property in the class creation - small class|305,957|152979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:44:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4010512.9171610093,"samples":2005257},{"name":"Adding property in the object creation - small object","opsSec":4013824.8761250842,"samples":2006913},{"name":"Adding property after the function creation - small class","opsSec":295172.59084600967,"samples":147587},{"name":"Adding property in the function creation - small class","opsSec":315489.0787719247,"samples":157745},{"name":"Adding property after the class creation - small class","opsSec":310888.47602480854,"samples":155445},{"name":"Adding property in the class creation - small class","opsSec":305957.986537952,"samples":152979}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,034,705|8017353|
|Getter|12,580,865|6290433|
|Method|15,094,659|7547330|
|DefineProperty (getter)|16,062,347|8031175|
|DefineProperty (getter & enumerable=false)|13,941,786|6970894|
|DefineProperty (getter & configurable=false)|16,139,195|8069599|
|DefineProperty (getter & enumerable=false & configurable=false)|13,999,689|6999845|
|DefineProperty (writable)|16,202,573|8101287|
|DefineProperty (writable & enumerable=false)|16,090,948|8045475|
|DefineProperty (writable & enumerable=false & configurable=false)|16,143,141|8071571|
|DefineProperties (getter)|13,991,115|6995558|
|DefineProperties (getter & enumerable=false)|13,980,593|6990297|
|DefineProperties (getter & enumerable=false & configurable=false)|13,956,106|6978054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16034705.294532726,"samples":8017353},{"name":"Getter","opsSec":12580865.647702208,"samples":6290433},{"name":"Method","opsSec":15094659.637729036,"samples":7547330},{"name":"DefineProperty (getter)","opsSec":16062347.97613114,"samples":8031175},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13941786.522091614,"samples":6970894},{"name":"DefineProperty (getter & configurable=false)","opsSec":16139195.99879961,"samples":8069599},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13999689.020024493,"samples":6999845},{"name":"DefineProperty (writable)","opsSec":16202573.967685498,"samples":8101287},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16090948.101385847,"samples":8045475},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16143141.289749937,"samples":8071571},{"name":"DefineProperties (getter)","opsSec":13991115.63627607,"samples":6995558},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13980593.664346829,"samples":6990297},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13956106.464830408,"samples":6978054}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,930,463|7965232|
|Setter|6,656,300|3328151|
|Method|15,729,418|7864710|
|DefineProperty (setter)|15,768,446|7884224|
|DefineProperty (setter & enumerable=false)|6,666,490|3333246|
|DefineProperty (setter & configurable=false)|6,705,279|3352722|
|DefineProperty (setter & enumerable=false & configurable=false)|6,687,678|3343840|
|DefineProperty (writable)|15,885,538|7942770|
|DefineProperty (writable & enumerable=false)|15,889,068|7944535|
|DefineProperty (writable & enumerable=false & configurable=false)|15,897,293|7948647|
|DefineProperties (setter)|15,890,512|7945257|
|DefineProperties (setter & enumerable=false)|6,572,880|3286441|
|DefineProperties (setter & enumerable=false & configurable=false)|6,705,889|3352945|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:16:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15930463.745087646,"samples":7965232},{"name":"Setter","opsSec":6656300.429100301,"samples":3328151},{"name":"Method","opsSec":15729418.14391029,"samples":7864710},{"name":"DefineProperty (setter)","opsSec":15768446.643842226,"samples":7884224},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6666490.573363137,"samples":3333246},{"name":"DefineProperty (setter & configurable=false)","opsSec":6705279.84133487,"samples":3352722},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6687678.087319965,"samples":3343840},{"name":"DefineProperty (writable)","opsSec":15885538.983368967,"samples":7942770},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15889068.570054213,"samples":7944535},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15897293.014426721,"samples":7948647},{"name":"DefineProperties (setter)","opsSec":15890512.31549448,"samples":7945257},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6572880.501377,"samples":3286441},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6705889.383101002,"samples":3352945}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,709,416|5354709|
|{ ...object, __proto__: null }|2,214,945|1107473|
|{ ...object, newProp: true }|10,325,157|5162579|
|structuredClone|319,709|159855|
|JSON.parse + JSON.stringify|290,446|145224|
|loop + object.keys starting with {}|1,454,205|727103|
|loop + object.keys starting with { __proto__: null }|884,243|442122|
|loop + object.keys starting with { randomProp: true }|663,349|331675|
|object.keys + reduce(FN, {})|1,521,878|760940|
|object.keys + reduce(FN, { __proto__: null })|885,331|442666|
|object.keys + reduce(FN, { newProp: true })|690,966|345487|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:29:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10709416.60777169,"samples":5354709},{"name":"{ ...object, __proto__: null }","opsSec":2214945.2779286383,"samples":1107473},{"name":"{ ...object, newProp: true }","opsSec":10325157.587026969,"samples":5162579},{"name":"structuredClone","opsSec":319709.1815445078,"samples":159855},{"name":"JSON.parse + JSON.stringify","opsSec":290446.7301667427,"samples":145224},{"name":"loop + object.keys starting with {}","opsSec":1454205.3136141824,"samples":727103},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":884243.0750810573,"samples":442122},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":663349.2464362849,"samples":331675},{"name":"object.keys + reduce(FN, {})","opsSec":1521878.8677195797,"samples":760940},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":885331.5520224212,"samples":442666},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":690966.2141932853,"samples":345487}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|325,781|162891|
|Sort using first char|1,333,045|666523|
|Sort using localeCompare|1,271,427|635714|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:36:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":325781.50090274087,"samples":162891},{"name":"Sort using first char","opsSec":1333045.794710869,"samples":666523},{"name":"Sort using localeCompare","opsSec":1271427.857599826,"samples":635714}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,253|1127|
|{...smallObject} - Total keys: 2|12,203,319|6101660|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,479|1240|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,939|3470|
|{ ...bigObject, ...anotherBigObject }|1,372|687|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,892,838|3446420|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,067,528|5533765|
|{ ...smallObject, ...anotherSmallObject }|9,426,214|4713108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:44:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2253.8670443830556,"samples":1127},{"name":"{...smallObject} - Total keys: 2","opsSec":12203319.389828498,"samples":6101660},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2479.4026424801636,"samples":1240},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6939.766879349981,"samples":3470},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1372.721186669745,"samples":687},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6892838.676573448,"samples":3446420},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11067528.29553802,"samples":5533765},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9426214.586051181,"samples":4713108}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,159,490|8079746|
|Using backtick (`)|16,284,069|8142035|
|Using array.join|6,030,203|3015102|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:03:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16159490.577968996,"samples":8079746},{"name":"Using backtick (`)","opsSec":16284069.739465045,"samples":8142035},{"name":"Using array.join","opsSec":6030203.698494901,"samples":3015102}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,835,090|7917546|
|(short string) (true) String#slice and strict comparison|16,185,189|8092595|
|(long string) (true) String#endsWith|14,783,574|7391788|
|(long string) (true) String#slice and strict comparison|16,112,723|8056362|
|(short string) (false) String#endsWith|15,991,889|7995946|
|(short string) (false) String#slice and strict comparison|16,177,341|8088671|
|(long string) (false) String#endsWith|15,430,753|7715378|
|(long string) (false) String#slice and strict comparison|16,164,346|8082174|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:15:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15835090.543204792,"samples":7917546},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16185189.35255314,"samples":8092595},{"name":"(long string) (true) String#endsWith","opsSec":14783574.31468567,"samples":7391788},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16112723.387703585,"samples":8056362},{"name":"(short string) (false) String#endsWith","opsSec":15991889.952957107,"samples":7995946},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16177341.191030499,"samples":8088671},{"name":"(long string) (false) String#endsWith","opsSec":15430753.932234822,"samples":7715378},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16164346.448357703,"samples":8082174}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,101,480|8050741|
|Using indexof|16,220,177|8110089|
|Using RegExp.test|7,966,860|3983431|
|Using RegExp.text with cached regex pattern|8,101,213|4050607|
|Using new RegExp.test|3,629,379|1814690|
|Using new RegExp.test with cached regex pattern|3,838,488|1919245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:24:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16101480.711879928,"samples":8050741},{"name":"Using indexof","opsSec":16220177.675555652,"samples":8110089},{"name":"Using RegExp.test","opsSec":7966860.820927038,"samples":3983431},{"name":"Using RegExp.text with cached regex pattern","opsSec":8101213.497715075,"samples":4050607},{"name":"Using new RegExp.test","opsSec":3629379.905642111,"samples":1814690},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3838488.203586424,"samples":1919245}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,688,371|7844186|
|(short string) (true) String#slice and strict comparison|16,114,635|8057318|
|(long string) (true) String#startsWith|14,799,262|7399632|
|(long string) (true) String#slice and strict comparison|16,161,627|8080814|
|(short string) (false) String#startsWith|16,009,767|8004884|
|(short string) (false) String#slice and strict comparison|16,204,602|8102302|
|(long string) (false) String#startsWith|15,578,299|7789150|
|(long string) (false) String#slice and strict comparison|16,209,932|8104967|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:35:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15688371.341082046,"samples":7844186},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16114635.29094757,"samples":8057318},{"name":"(long string) (true) String#startsWith","opsSec":14799262.993625548,"samples":7399632},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16161627.806064576,"samples":8080814},{"name":"(short string) (false) String#startsWith","opsSec":16009767.135413107,"samples":8004884},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16204602.63881905,"samples":8102302},{"name":"(long string) (false) String#startsWith","opsSec":15578299.408096852,"samples":7789150},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16209932.897787644,"samples":8104967}]}-->
