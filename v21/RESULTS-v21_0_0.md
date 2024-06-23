## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,565,765|8282883|
|Using dot notation|16,581,643|8290822|
|Using define property (writable)|3,478,612|1739307|
|Using define property initialized (writable)|4,238,077|2119039|
|Using define property (getter)|2,115,704|1057853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:40:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16565765.702395393,"samples":8282883},{"name":"Using dot notation","opsSec":16581643.567478336,"samples":8290822},{"name":"Using define property (writable)","opsSec":3478612.671154577,"samples":1739307},{"name":"Using define property initialized (writable)","opsSec":4238077.804704039,"samples":2119039},{"name":"Using define property (getter)","opsSec":2115704.616324556,"samples":1057853}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.019ms
new Array(length)|10|0.002ms
array.push|100|0.089ms
new Array(length)|100|0.011ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.295ms
new Array(length)|10,000|0.148ms
array.push|1,000,000|24.636ms
new Array(length)|1,000,000|18.066ms
array.push|100,000,000|1,960.683ms
new Array(length)|100,000,000|4,372.527ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.309ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|22.039ms
new Array(length)|1,000,000|8.493ms
array.push|100,000,000|2,066.366ms
new Array(length)|100,000,000|4,943.758ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|227|114|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:51:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":227.93800086384525,"samples":114},{"name":"Array.from","opsSec":22.503375942402368,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,354|2678|
|new Blob (1024)|747|378|
|text (128)|6,359|3180|
|text (1024)|806|404|
|arrayBuffer (128)|6,428|3215|
|arrayBuffer (1024)|799|400|
|slice (0, 64)|328,927|164464|
|slice (0, 512)|35,851|17926|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:54:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5354.895991682849,"samples":2678},{"name":"new Blob (1024)","opsSec":747.8640838581191,"samples":378},{"name":"text (128)","opsSec":6359.618282907082,"samples":3180},{"name":"text (1024)","opsSec":806.7195054215019,"samples":404},{"name":"arrayBuffer (128)","opsSec":6428.1465211694895,"samples":3215},{"name":"arrayBuffer (1024)","opsSec":799.6518667596825,"samples":400},{"name":"slice (0, 64)","opsSec":328927.5743464039,"samples":164464},{"name":"slice (0, 512)","opsSec":35851.41590822439,"samples":17926}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|316,701|158351|
|[True conditional] Using constructor name|313,201|156601|
|[True conditional] Check if property is valid then instanceof |315,407|157704|
|[False conditional] Using instanceof only|15,938,536|7969269|
|[False conditional] Using constructor name|16,392,370|8196186|
|[False conditional] Check if property is valid then instanceof |16,387,944|8193973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:00:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":316701.08659614157,"samples":158351},{"name":"[True conditional] Using constructor name","opsSec":313201.2645788712,"samples":156601},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":315407.1913200594,"samples":157704},{"name":"[False conditional] Using instanceof only","opsSec":15938536.20956365,"samples":7969269},{"name":"[False conditional] Using constructor name","opsSec":16392370.261677993,"samples":8196186},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16387944.687222153,"samples":8193973}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,559|3280|
|crypto.verify('RSA-SHA256')|6,847|3424|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:04:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6559.59417102274,"samples":3280},{"name":"crypto.verify('RSA-SHA256')","opsSec":6847.379956102169,"samples":3424}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,369,277|684639|
|fromUnixToISOString(new Date())|1,901,257|950629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:08:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1369277.7726567136,"samples":684639},{"name":"fromUnixToISOString(new Date())","opsSec":1901257.0420141327,"samples":950629}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,016,084|508043|
|Using brackets {}|1,052,606|526304|
|Using '' + |1,052,764|526383|
|Using date.toString()|1,173,488|586745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:10:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1016084.2751560118,"samples":508043},{"name":"Using brackets {}","opsSec":1052606.1192993503,"samples":526304},{"name":"Using '' + ","opsSec":1052764.885063739,"samples":526383},{"name":"Using date.toString()","opsSec":1173488.2530449266,"samples":586745}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,283,967|1641984|
|Using delete property (proto: null)|9,050,929|4525465|
|Using delete property (cached proto: null)|3,269,238|1634620|
|Using undefined assignment|16,554,281|8277141|
|Using undefined assignment (proto: null)|9,450,096|4725049|
|Using undefined property (cached proto: null)|16,548,120|8274061|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:22:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3283967.6382729886,"samples":1641984},{"name":"Using delete property (proto: null)","opsSec":9050929.555470588,"samples":4525465},{"name":"Using delete property (cached proto: null)","opsSec":3269238.812122357,"samples":1634620},{"name":"Using undefined assignment","opsSec":16554281.660571044,"samples":8277141},{"name":"Using undefined assignment (proto: null)","opsSec":9450096.562535856,"samples":4725049},{"name":"Using undefined property (cached proto: null)","opsSec":16548120.918966023,"samples":8274061}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|306,392|153197|
|NodeError|304,201|152101|
|NodeError Range|310,812|155407|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:28:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":306392.45616861136,"samples":153197},{"name":"NodeError","opsSec":304201.31969442876,"samples":152101},{"name":"NodeError Range","opsSec":310812.4716900787,"samples":155407}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,611,843|805922|
|Function returning explicitly undefined|1,599,497|799749|
|Function returning implicitly undefined|1,633,553|816777|
|Function returning string|1,575,682|787842|
|Function returning integer|1,643,710|821856|
|Function returning float|1,623,868|811935|
|Function returning functions|1,573,396|786699|
|Function returning arrow functions|1,603,141|801571|
|Function returning empty object|1,618,937|809469|
|Function returning empty array|1,590,523|795262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:34:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1611843.561136878,"samples":805922},{"name":"Function returning explicitly undefined","opsSec":1599497.5393292839,"samples":799749},{"name":"Function returning implicitly undefined","opsSec":1633553.74217115,"samples":816777},{"name":"Function returning string","opsSec":1575682.507830877,"samples":787842},{"name":"Function returning integer","opsSec":1643710.3940302862,"samples":821856},{"name":"Function returning float","opsSec":1623868.5806698282,"samples":811935},{"name":"Function returning functions","opsSec":1573396.9714015732,"samples":786699},{"name":"Function returning arrow functions","opsSec":1603141.2783711592,"samples":801571},{"name":"Function returning empty object","opsSec":1618937.7105113785,"samples":809469},{"name":"Function returning empty array","opsSec":1590523.9575284282,"samples":795262}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,464,949|8232475|
|using Array.includes (first item)|16,516,749|8258375|
|Using raw comparison|16,499,465|8249733|
|Using raw comparison (first item)|16,525,302|8262652|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:42:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16464949.717360405,"samples":8232475},{"name":"using Array.includes (first item)","opsSec":16516749.070655636,"samples":8258375},{"name":"Using raw comparison","opsSec":16499465.205376633,"samples":8249733},{"name":"Using raw comparison (first item)","opsSec":16525302.636781046,"samples":8262652}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,712,878|6856440|
|Using Object.getOwnPropertyNames()|14,541,635|7270818|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:49:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13712878.587617029,"samples":6856440},{"name":"Using Object.getOwnPropertyNames()","opsSec":14541635.916792093,"samples":7270818}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,226,035|8113018|
|Length = 10_000 - Array.at|16,288,002|8144002|
|Length = 1_000_000 - Array.at|16,352,996|8176499|
|Length = 100 - Array[length - 1]|16,284,992|8142497|
|Length = 10_000 - Array[length - 1]|16,259,356|8129679|
|Length = 1_000_000 - Array[length - 1]|16,286,055|8143028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:57:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16226035.961314116,"samples":8113018},{"name":"Length = 10_000 - Array.at","opsSec":16288002.920425221,"samples":8144002},{"name":"Length = 1_000_000 - Array.at","opsSec":16352996.151941258,"samples":8176499},{"name":"Length = 100 - Array[length - 1]","opsSec":16284992.974981751,"samples":8142497},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16259356.294325646,"samples":8129679},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16286055.456394251,"samples":8143028}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,919,273|6459637|
|Object.create({})|1,855,643|927822|
|Cached Empty.prototype|16,352,228|8176115|
|Empty.prototype|1,865,039|932520|
|Empty class|1,252,707|626354|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:06:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12919273.907594152,"samples":6459637},{"name":"Object.create({})","opsSec":1855643.5248410355,"samples":927822},{"name":"Cached Empty.prototype","opsSec":16352228.495111419,"samples":8176115},{"name":"Empty.prototype","opsSec":1865039.017301505,"samples":932520},{"name":"Empty class","opsSec":1252707.7431448319,"samples":626354}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,502,256|8251129|
|Using optional chain (obj.field?.field2) (undefined)|16,571,001|8285501|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,565,117|8282559|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,619,824|8309913|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:14:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16502256.9691755,"samples":8251129},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16571001.636523211,"samples":8285501},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16565117.65245,"samples":8282559},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16619824.383310234,"samples":8309913}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,531,374|8265688|
|Using parseInt(x, 10) - big number (10 len)|16,530,874|8265438|
|Using + - small number (2 len)|16,546,447|8273224|
|Using + - big number (10 len)|16,577,468|8288735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:22:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16531374.060837736,"samples":8265688},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16530874.589026188,"samples":8265438},{"name":"Using + - small number (2 len)","opsSec":16546447.368803125,"samples":8273224},{"name":"Using + - big number (10 len)","opsSec":16577468.063335575,"samples":8288735}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,097,886|548944|
|Using ? operator to avoid rejection|1,100,652|550327|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:27:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1097886.6043139996,"samples":548944},{"name":"Using ? operator to avoid rejection","opsSec":1100652.9188456475,"samples":550327}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,466,371|8233186|
|Raw usage underscore usage|16,433,279|8216640|
|Manipulating private properties using #|16,483,245|8241623|
|Manipulating private properties using underscore(_)|16,512,292|8256147|
|Manipulating private properties using Symbol|16,463,103|8231552|
|Manipulating private properties using PrivateSymbol|11,957,641|5978821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:35:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":16466371.835112663,"samples":8233186},{"name":"Raw usage underscore usage","opsSec":16433279.114532214,"samples":8216640},{"name":"Manipulating private properties using #","opsSec":16483245.331914973,"samples":8241623},{"name":"Manipulating private properties using underscore(_)","opsSec":16512292.181181196,"samples":8256147},{"name":"Manipulating private properties using Symbol","opsSec":16463103.466185076,"samples":8231552},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11957641.452622615,"samples":5978821}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,932,181|1966091|
|Adding property in the object creation - small object|3,944,214|1972108|
|Adding property after the function creation - small class|270,005|135003|
|Adding property in the function creation - small class|258,766|129384|
|Adding property after the class creation - small class|273,437|136719|
|Adding property in the class creation - small class|261,847|130924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:42:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3932181.497497253,"samples":1966091},{"name":"Adding property in the object creation - small object","opsSec":3944214.9825151893,"samples":1972108},{"name":"Adding property after the function creation - small class","opsSec":270005.58015051036,"samples":135003},{"name":"Adding property in the function creation - small class","opsSec":258766.17371457233,"samples":129384},{"name":"Adding property after the class creation - small class","opsSec":273437.7615253134,"samples":136719},{"name":"Adding property in the class creation - small class","opsSec":261847.27731893485,"samples":130924}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,490,182|8245092|
|Getter|13,860,676|6930339|
|Method|16,392,167|8196084|
|DefineProperty (getter)|16,324,605|8162303|
|DefineProperty (getter & enumerable=false)|13,855,641|6927821|
|DefineProperty (getter & configurable=false)|16,516,760|8258381|
|DefineProperty (getter & enumerable=false & configurable=false)|13,739,464|6869733|
|DefineProperty (writable)|16,313,963|8156982|
|DefineProperty (writable & enumerable=false)|16,338,304|8169153|
|DefineProperty (writable & enumerable=false & configurable=false)|16,442,000|8221001|
|DefineProperties (getter)|12,776,139|6388070|
|DefineProperties (getter & enumerable=false)|13,802,180|6901091|
|DefineProperties (getter & enumerable=false & configurable=false)|13,749,801|6874901|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:55:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16490182.592499407,"samples":8245092},{"name":"Getter","opsSec":13860676.301413627,"samples":6930339},{"name":"Method","opsSec":16392167.31997368,"samples":8196084},{"name":"DefineProperty (getter)","opsSec":16324605.065898605,"samples":8162303},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13855641.94714492,"samples":6927821},{"name":"DefineProperty (getter & configurable=false)","opsSec":16516760.16493744,"samples":8258381},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13739464.414540106,"samples":6869733},{"name":"DefineProperty (writable)","opsSec":16313963.502137346,"samples":8156982},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16338304.75348627,"samples":8169153},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16442000.737734739,"samples":8221001},{"name":"DefineProperties (getter)","opsSec":12776139.220206346,"samples":6388070},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13802180.229605444,"samples":6901091},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13749801.744299762,"samples":6874901}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,386,771|8193386|
|Setter|6,741,587|3370794|
|Method|16,296,630|8148316|
|DefineProperty (setter)|16,303,921|8151961|
|DefineProperty (setter & enumerable=false)|6,708,281|3354141|
|DefineProperty (setter & configurable=false)|6,776,614|3388308|
|DefineProperty (setter & enumerable=false & configurable=false)|6,834,043|3417022|
|DefineProperty (writable)|16,353,826|8176914|
|DefineProperty (writable & enumerable=false)|16,314,836|8157419|
|DefineProperty (writable & enumerable=false & configurable=false)|16,093,179|8046590|
|DefineProperties (setter)|16,316,163|8158082|
|DefineProperties (setter & enumerable=false)|6,592,265|3296133|
|DefineProperties (setter & enumerable=false & configurable=false)|6,819,070|3409536|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:12:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16386771.695260955,"samples":8193386},{"name":"Setter","opsSec":6741587.180266986,"samples":3370794},{"name":"Method","opsSec":16296630.220477907,"samples":8148316},{"name":"DefineProperty (setter)","opsSec":16303921.813416421,"samples":8151961},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6708281.510590042,"samples":3354141},{"name":"DefineProperty (setter & configurable=false)","opsSec":6776614.180754764,"samples":3388308},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6834043.7425606465,"samples":3417022},{"name":"DefineProperty (writable)","opsSec":16353826.682119032,"samples":8176914},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16314836.482993549,"samples":8157419},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16093179.163552986,"samples":8046590},{"name":"DefineProperties (setter)","opsSec":16316163.82883663,"samples":8158082},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6592265.814537199,"samples":3296133},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6819070.514025104,"samples":3409536}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,954,997|4977499|
|{ ...object, __proto__: null }|2,226,060|1113031|
|{ ...object, newProp: true }|10,011,808|5005905|
|structuredClone|277,320|138661|
|JSON.parse + JSON.stringify|249,426|124714|
|loop + object.keys starting with {}|1,413,122|706562|
|loop + object.keys starting with { __proto__: null }|812,495|406248|
|loop + object.keys starting with { randomProp: true }|653,118|326560|
|object.keys + reduce(FN, {})|1,469,486|734744|
|object.keys + reduce(FN, { __proto__: null })|827,922|413962|
|object.keys + reduce(FN, { newProp: true })|671,880|335941|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:26:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":9954997.558537114,"samples":4977499},{"name":"{ ...object, __proto__: null }","opsSec":2226060.1880737585,"samples":1113031},{"name":"{ ...object, newProp: true }","opsSec":10011808.2622632,"samples":5005905},{"name":"structuredClone","opsSec":277320.34770310187,"samples":138661},{"name":"JSON.parse + JSON.stringify","opsSec":249426.9051939667,"samples":124714},{"name":"loop + object.keys starting with {}","opsSec":1413122.3107101284,"samples":706562},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":812495.1151147637,"samples":406248},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":653118.2640832881,"samples":326560},{"name":"object.keys + reduce(FN, {})","opsSec":1469486.9307226867,"samples":734744},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":827922.6723404182,"samples":413962},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":671880.7937778527,"samples":335941}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|339,627|169814|
|Sort using first char|1,314,199|657100|
|Sort using localeCompare|1,235,449|617725|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:33:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":339627.4139139123,"samples":169814},{"name":"Sort using first char","opsSec":1314199.3463945778,"samples":657100},{"name":"Sort using localeCompare","opsSec":1235449.224144636,"samples":617725}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,236|1119|
|{...smallObject} - Total keys: 2|13,137,182|6568592|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,362|1182|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,645|3323|
|{ ...bigObject, ...anotherBigObject }|1,363|682|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,789,657|3394829|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,797,458|5398730|
|{ ...smallObject, ...anotherSmallObject }|9,030,279|4515140|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:42:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2236.939061609154,"samples":1119},{"name":"{...smallObject} - Total keys: 2","opsSec":13137182.809783585,"samples":6568592},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2362.1603517455615,"samples":1182},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6645.792341172064,"samples":3323},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1363.2127038935903,"samples":682},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6789657.2165102735,"samples":3394829},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10797458.954828182,"samples":5398730},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9030279.01823825,"samples":4515140}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,239,840|8119921|
|Using backtick (`)|16,400,717|8200359|
|Using array.join|6,510,987|3255494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:59:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16239840.13375403,"samples":8119921},{"name":"Using backtick (`)","opsSec":16400717.679360664,"samples":8200359},{"name":"Using array.join","opsSec":6510987.32938897,"samples":3255494}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,422,273|7711137|
|(short string) (true) String#slice and strict comparison|16,259,078|8129540|
|(long string) (true) String#endsWith|13,827,360|6913681|
|(long string) (true) String#slice and strict comparison|16,125,829|8062915|
|(short string) (false) String#endsWith|15,752,731|7876366|
|(short string) (false) String#slice and strict comparison|16,250,547|8125274|
|(long string) (false) String#endsWith|15,799,782|7899892|
|(long string) (false) String#slice and strict comparison|16,297,757|8148879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:12:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15422273.455810435,"samples":7711137},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16259078.968859911,"samples":8129540},{"name":"(long string) (true) String#endsWith","opsSec":13827360.951649478,"samples":6913681},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16125829.715492392,"samples":8062915},{"name":"(short string) (false) String#endsWith","opsSec":15752731.053552572,"samples":7876366},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16250547.310351035,"samples":8125274},{"name":"(long string) (false) String#endsWith","opsSec":15799782.681563392,"samples":7899892},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16297757.90674348,"samples":8148879}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,276,166|8138084|
|Using indexof|16,271,955|8135978|
|Using RegExp.test|7,498,718|3749360|
|Using RegExp.text with cached regex pattern|8,568,436|4284219|
|Using new RegExp.test|3,558,142|1779072|
|Using new RegExp.test with cached regex pattern|3,830,290|1915146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:21:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16276166.277040046,"samples":8138084},{"name":"Using indexof","opsSec":16271955.868095757,"samples":8135978},{"name":"Using RegExp.test","opsSec":7498718.791424297,"samples":3749360},{"name":"Using RegExp.text with cached regex pattern","opsSec":8568436.173670307,"samples":4284219},{"name":"Using new RegExp.test","opsSec":3558142.3966614893,"samples":1779072},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3830290.860310795,"samples":1915146}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,714,467|7857234|
|(short string) (true) String#slice and strict comparison|16,572,255|8286128|
|(long string) (true) String#startsWith|14,270,536|7135269|
|(long string) (true) String#slice and strict comparison|16,259,171|8129586|
|(short string) (false) String#startsWith|15,856,209|7928106|
|(short string) (false) String#slice and strict comparison|16,448,212|8224107|
|(long string) (false) String#startsWith|16,009,724|8004863|
|(long string) (false) String#slice and strict comparison|16,517,752|8258877|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:31:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15714467.775202734,"samples":7857234},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16572255.130750624,"samples":8286128},{"name":"(long string) (true) String#startsWith","opsSec":14270536.407695046,"samples":7135269},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16259171.170431463,"samples":8129586},{"name":"(short string) (false) String#startsWith","opsSec":15856209.943454217,"samples":7928106},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16448212.258827629,"samples":8224107},{"name":"(long string) (false) String#startsWith","opsSec":16009724.518997882,"samples":8004863},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16517752.275095105,"samples":8258877}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,006,487|8003244|
|Using this|16,433,671|8216836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:40:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":16006487.351238525,"samples":8003244},{"name":"Using this","opsSec":16433671.905965775,"samples":8216836}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,632,200|3316101|
|Date.now()|9,303,032|4651517|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:45:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6632200.839369913,"samples":3316101},{"name":"Date.now()","opsSec":9303032.926480308,"samples":4651517}]}-->
