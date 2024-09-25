## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,910,105|8955053|
|Using dot notation|17,962,004|8981003|
|Using define property (writable)|3,354,606|1677304|
|Using define property initialized (writable)|3,928,648|1964325|
|Using define property (getter)|1,884,745|942373|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:15:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":17910105.570393708,"samples":8955053},{"name":"Using dot notation","opsSec":17962004.526334383,"samples":8981003},{"name":"Using define property (writable)","opsSec":3354606.7520771767,"samples":1677304},{"name":"Using define property initialized (writable)","opsSec":3928648.9392394447,"samples":1964325},{"name":"Using define property (getter)","opsSec":1884745.9057554598,"samples":942373}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.008ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.355ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|29.049ms
new Array(length)|1,000,000|16.415ms
array.push|100,000,000|2,023.515ms
new Array(length)|100,000,000|4,250.003ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.019ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.502ms
new Array(length)|10,000|3.282ms
array.push|1,000,000|262.274ms
new Array(length)|1,000,000|4.847ms
array.push|100,000,000|2,338.484ms
new Array(length)|100,000,000|4,535.07ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|233|117|
|Array.from|19|10|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:02:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Array","opsSec":233.16221365830117,"samples":117},{"name":"Array.from","opsSec":19.72595717933681,"samples":10}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,262|2132|
|new Blob (1024)|565|289|
|text (128)|33,439|16720|
|text (1024)|15,616|7809|
|arrayBuffer (128)|41,236|20619|
|arrayBuffer (1024)|16,747|8374|
|slice (0, 64)|76,172|38087|
|slice (0, 512)|20,976|11599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:36:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4262.987617176076,"samples":2132},{"name":"new Blob (1024)","opsSec":565.0473484368795,"samples":289},{"name":"text (128)","opsSec":33439.45787925818,"samples":16720},{"name":"text (1024)","opsSec":15616.175905455455,"samples":7809},{"name":"arrayBuffer (128)","opsSec":41236.8412427354,"samples":20619},{"name":"arrayBuffer (1024)","opsSec":16747.32384414608,"samples":8374},{"name":"slice (0, 64)","opsSec":76172.2347832144,"samples":38087},{"name":"slice (0, 512)","opsSec":20976.099525734222,"samples":11599}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|268,377|134189|
|[True conditional] Using constructor name|270,076|135039|
|[True conditional] Check if property is valid then instanceof |278,255|139128|
|[False conditional] Using instanceof only|12,667,207|6333604|
|[False conditional] Using constructor name|17,071,833|8535917|
|[False conditional] Check if property is valid then instanceof |16,711,672|8355837|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:18:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":268377.2372992016,"samples":134189},{"name":"[True conditional] Using constructor name","opsSec":270076.42114524066,"samples":135039},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":278255.33770086657,"samples":139128},{"name":"[False conditional] Using instanceof only","opsSec":12667207.066447748,"samples":6333604},{"name":"[False conditional] Using constructor name","opsSec":17071833.416635707,"samples":8535917},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16711672.971689275,"samples":8355837}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,114|1058|
|crypto.verify('RSA-SHA256')|2,112|1057|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":2114.3332879776976,"samples":1058},{"name":"crypto.verify('RSA-SHA256')","opsSec":2112.253955943721,"samples":1057}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,730,492|865247|
|fromUnixToISOString(new Date())|1,781,030|890516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:32:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1730492.1860355262,"samples":865247},{"name":"fromUnixToISOString(new Date())","opsSec":1781030.343228589,"samples":890516}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,445|7723|
|Intl.DateTimeFormat().format(new Date())|13,634|6818|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,983|7992|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,812|7907|
|Reusing Intl.DateTimeFormat()|610,651|305326|
|Date.toLocaleDateString()|623,632|311817|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,060|8031|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:37:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15445.939915346888,"samples":7723},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13634.421052561549,"samples":6818},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15983.232741081854,"samples":7992},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15812.942081628555,"samples":7907},{"name":"Reusing Intl.DateTimeFormat()","opsSec":610651.1217271446,"samples":305326},{"name":"Date.toLocaleDateString()","opsSec":623632.5596321719,"samples":311817},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16060.727604142447,"samples":8031}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|898,367|449184|
|Using brackets {}|911,241|455621|
|Using '' + |910,482|455242|
|Using date.toString()|1,016,379|508190|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:44:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":898367.0948005144,"samples":449184},{"name":"Using brackets {}","opsSec":911241.642843173,"samples":455621},{"name":"Using '' + ","opsSec":910482.4522019635,"samples":455242},{"name":"Using date.toString()","opsSec":1016379.9272072383,"samples":508190}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,644,551|1322276|
|Using delete property (proto: null)|8,309,381|4154691|
|Using delete property (cached proto: null)|2,674,042|1337023|
|Using undefined assignment|14,724,732|7362367|
|Using undefined assignment (proto: null)|8,885,348|4442675|
|Using undefined property (cached proto: null)|13,185,700|6592851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:52:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2644551.3824694604,"samples":1322276},{"name":"Using delete property (proto: null)","opsSec":8309381.532442341,"samples":4154691},{"name":"Using delete property (cached proto: null)","opsSec":2674042.4019953194,"samples":1337023},{"name":"Using undefined assignment","opsSec":14724732.908187881,"samples":7362367},{"name":"Using undefined assignment (proto: null)","opsSec":8885348.967959376,"samples":4442675},{"name":"Using undefined property (cached proto: null)","opsSec":13185700.75430252,"samples":6592851}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|275,130|137566|
|NodeError|274,253|137127|
|NodeError Range|275,457|137729|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:25:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":275130.42190547934,"samples":137566},{"name":"NodeError","opsSec":274253.14426084154,"samples":137127},{"name":"NodeError Range","opsSec":275457.09473912,"samples":137729}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,635,780|817891|
|Function returning explicitly undefined|1,578,455|789228|
|Function returning implicitly undefined|1,631,083|815542|
|Function returning string|1,556,964|778483|
|Function returning integer|1,609,989|804995|
|Function returning float|1,577,930|788966|
|Function returning functions|1,525,763|762882|
|Function returning arrow functions|1,540,199|770100|
|Function returning empty object|1,664,872|832437|
|Function returning empty array|1,615,329|807665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:30:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1635780.2326339742,"samples":817891},{"name":"Function returning explicitly undefined","opsSec":1578455.5960769362,"samples":789228},{"name":"Function returning implicitly undefined","opsSec":1631083.7850279761,"samples":815542},{"name":"Function returning string","opsSec":1556964.7320968697,"samples":778483},{"name":"Function returning integer","opsSec":1609989.0151455395,"samples":804995},{"name":"Function returning float","opsSec":1577930.3581933943,"samples":788966},{"name":"Function returning functions","opsSec":1525763.4237678759,"samples":762882},{"name":"Function returning arrow functions","opsSec":1540199.2182800095,"samples":770100},{"name":"Function returning empty object","opsSec":1664872.8112213688,"samples":832437},{"name":"Function returning empty array","opsSec":1615329.9401672722,"samples":807665}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,765,176|7882589|
|using Array.includes (first item)|16,764,663|8382332|
|Using raw comparison|17,540,672|8770337|
|Using raw comparison (first item)|17,441,275|8720638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:41:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":15765176.889888177,"samples":7882589},{"name":"using Array.includes (first item)","opsSec":16764663.673150975,"samples":8382332},{"name":"Using raw comparison","opsSec":17540672.821780566,"samples":8770337},{"name":"Using raw comparison (first item)","opsSec":17441275.066098902,"samples":8720638}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|15,592,339|7796170|
|Using Object.getOwnPropertyNames()|14,538,132|7269067|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:50:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":15592339.224842465,"samples":7796170},{"name":"Using Object.getOwnPropertyNames()","opsSec":14538132.344718637,"samples":7269067}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,772,571|4386286|
|Length = 10_000 - Array.at|9,552,927|4776464|
|Length = 1_000_000 - Array.at|9,410,658|4705331|
|Length = 100 - Array[length - 1]|17,613,110|8806556|
|Length = 10_000 - Array[length - 1]|17,872,262|8936132|
|Length = 1_000_000 - Array[length - 1]|18,107,195|9053598|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:59:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8772571.029539961,"samples":4386286},{"name":"Length = 10_000 - Array.at","opsSec":9552927.971209768,"samples":4776464},{"name":"Length = 1_000_000 - Array.at","opsSec":9410658.99407021,"samples":4705331},{"name":"Length = 100 - Array[length - 1]","opsSec":17613110.41447172,"samples":8806556},{"name":"Length = 10_000 - Array[length - 1]","opsSec":17872262.573270757,"samples":8936132},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":18107195.95251199,"samples":9053598}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|16,071,208|8035605|
|~ (small)|17,712,612|8856307|
|Math.floor (long)|17,533,841|8766921|
|~ (long)|17,681,907|8840954|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:12:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":16071208.479064627,"samples":8035605},{"name":"~ (small)","opsSec":17712612.844345283,"samples":8856307},{"name":"Math.floor (long)","opsSec":17533841.39214465,"samples":8766921},{"name":"~ (long)","opsSec":17681907.64364201,"samples":8840954}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,070,625|7035313|
|Object.create({})|1,749,851|874926|
|Cached Empty.prototype|16,518,517|8259259|
|Empty.prototype|1,822,965|911483|
|Empty class|1,154,200|582111|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:22:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":14070625.630485194,"samples":7035313},{"name":"Object.create({})","opsSec":1749851.666030424,"samples":874926},{"name":"Cached Empty.prototype","opsSec":16518517.055787453,"samples":8259259},{"name":"Empty.prototype","opsSec":1822965.6078798708,"samples":911483},{"name":"Empty class","opsSec":1154200.736791293,"samples":582111}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,180,007|8090004|
|Using optional chain (obj.field?.field2) (undefined)|18,542,346|9271174|
|Using and operator (obj.field && obj.field.field2) (Valid)|18,491,232|9245619|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,249,428|9124715|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:29:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16180007.090868803,"samples":8090004},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":18542346.89965983,"samples":9271174},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":18491232.703209564,"samples":9245619},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18249428.82308771,"samples":9124715}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|17,482,525|8741263|
|Using parseInt(x, 10) - big number (10 len)|9,186,636|4593319|
|Using + - small number (2 len)|18,227,799|9113900|
|Using + - big number (10 len)|18,097,067|9048534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":17482525.22654603,"samples":8741263},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":9186636.588682316,"samples":4593319},{"name":"Using + - small number (2 len)","opsSec":18227799.937256847,"samples":9113900},{"name":"Using + - big number (10 len)","opsSec":18097067.89240274,"samples":9048534}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|908,722|454362|
|Using ? operator to avoid rejection|976,785|488393|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:51:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":908722.8902350364,"samples":454362},{"name":"Using ? operator to avoid rejection","opsSec":976785.4002623882,"samples":488393}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,123,197|8061599|
|Raw usage underscore usage|17,156,358|8578180|
|Manipulating private properties using #|13,720,618|6860310|
|Manipulating private properties using underscore(_)|14,311,897|7157780|
|Manipulating private properties using Symbol|13,621,317|6810659|
|Manipulating private properties using PrivateSymbol|11,690,238|5845120|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:57:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":16123197.65301263,"samples":8061599},{"name":"Raw usage underscore usage","opsSec":17156358.97906304,"samples":8578180},{"name":"Manipulating private properties using #","opsSec":13720618.99214817,"samples":6860310},{"name":"Manipulating private properties using underscore(_)","opsSec":14311897.959600432,"samples":7157780},{"name":"Manipulating private properties using Symbol","opsSec":13621317.180697696,"samples":6810659},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11690238.630759148,"samples":5845120}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,959,226|1479614|
|Adding property in the object creation - small object|2,949,822|1474912|
|Adding property after the function creation - small class|229,774|114888|
|Adding property in the function creation - small class|234,550|117276|
|Adding property after the class creation - small class|193,651|96826|
|Adding property in the class creation - small class|196,459|98329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:09:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2959226.2312029274,"samples":1479614},{"name":"Adding property in the object creation - small object","opsSec":2949822.5960413343,"samples":1474912},{"name":"Adding property after the function creation - small class","opsSec":229774.66263986428,"samples":114888},{"name":"Adding property in the function creation - small class","opsSec":234550.94468986892,"samples":117276},{"name":"Adding property after the class creation - small class","opsSec":193651.31104660215,"samples":96826},{"name":"Adding property in the class creation - small class","opsSec":196459.57815528003,"samples":98329}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,134,670|8067336|
|Getter|14,125,721|7062861|
|Method|16,011,523|8005762|
|DefineProperty (getter)|15,782,127|7891064|
|DefineProperty (getter & enumerable=false)|14,207,309|7103655|
|DefineProperty (getter & configurable=false)|15,938,039|7969020|
|DefineProperty (getter & enumerable=false & configurable=false)|14,104,290|7052146|
|DefineProperty (writable)|16,421,354|8210678|
|DefineProperty (writable & enumerable=false)|15,846,237|7923119|
|DefineProperty (writable & enumerable=false & configurable=false)|16,075,745|8038111|
|DefineProperties (getter)|14,254,894|7127448|
|DefineProperties (getter & enumerable=false)|14,322,349|7161175|
|DefineProperties (getter & enumerable=false & configurable=false)|14,132,860|7066431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:17:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":16134670.848723302,"samples":8067336},{"name":"Getter","opsSec":14125721.105050642,"samples":7062861},{"name":"Method","opsSec":16011523.839786615,"samples":8005762},{"name":"DefineProperty (getter)","opsSec":15782127.06354502,"samples":7891064},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14207309.579076719,"samples":7103655},{"name":"DefineProperty (getter & configurable=false)","opsSec":15938039.641975839,"samples":7969020},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14104290.2901595,"samples":7052146},{"name":"DefineProperty (writable)","opsSec":16421354.242890246,"samples":8210678},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15846237.451003937,"samples":7923119},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16075745.391953902,"samples":8038111},{"name":"DefineProperties (getter)","opsSec":14254894.725937925,"samples":7127448},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14322349.068316596,"samples":7161175},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14132860.625913527,"samples":7066431}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|18,064,604|9032303|
|Setter|5,981,235|2990618|
|Method|18,012,163|9006082|
|DefineProperty (setter)|17,930,237|8965119|
|DefineProperty (setter & enumerable=false)|6,008,905|3004453|
|DefineProperty (setter & configurable=false)|6,026,543|3013272|
|DefineProperty (setter & enumerable=false & configurable=false)|5,919,098|2959550|
|DefineProperty (writable)|17,411,894|8705948|
|DefineProperty (writable & enumerable=false)|17,461,708|8730855|
|DefineProperty (writable & enumerable=false & configurable=false)|18,089,689|9044845|
|DefineProperties (setter)|17,246,797|8623399|
|DefineProperties (setter & enumerable=false)|5,998,554|2999278|
|DefineProperties (setter & enumerable=false & configurable=false)|6,017,823|3008912|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:44:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":18064604.102726847,"samples":9032303},{"name":"Setter","opsSec":5981235.652670691,"samples":2990618},{"name":"Method","opsSec":18012163.59129062,"samples":9006082},{"name":"DefineProperty (setter)","opsSec":17930237.201728906,"samples":8965119},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6008905.419917259,"samples":3004453},{"name":"DefineProperty (setter & configurable=false)","opsSec":6026543.523777361,"samples":3013272},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5919098.279476607,"samples":2959550},{"name":"DefineProperty (writable)","opsSec":17411894.811684873,"samples":8705948},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17461708.759172503,"samples":8730855},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18089689.052775394,"samples":9044845},{"name":"DefineProperties (setter)","opsSec":17246797.056177404,"samples":8623399},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5998554.964626166,"samples":2999278},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6017823.385361881,"samples":3008912}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,673,644|1336823|
|Using replaceAll()|2,453,114|1226558|
|Using replaceAll(//g)|2,379,046|1189524|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:00:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2673644.579619704,"samples":1336823},{"name":"Using replaceAll()","opsSec":2453114.4084552303,"samples":1226558},{"name":"Using replaceAll(//g)","opsSec":2379046.5020456435,"samples":1189524}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,430,745|5215373|
|{ ...object, __proto__: null }|10,427,753|5213877|
|{ ...object, newProp: true }|640,616|321472|
|structuredClone|242,453|121227|
|JSON.parse + JSON.stringify|196,826|98414|
|loop + object.keys starting with {}|1,165,723|582862|
|loop + object.keys starting with { __proto__: null }|687,015|343509|
|loop + object.keys starting with { randomProp: true }|506,187|253094|
|object.keys + reduce(FN, {})|1,149,645|574823|
|object.keys + reduce(FN, { __proto__: null })|649,893|324947|
|object.keys + reduce(FN, { newProp: true })|504,599|252300|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:07:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10430745.220245466,"samples":5215373},{"name":"{ ...object, __proto__: null }","opsSec":10427753.684023304,"samples":5213877},{"name":"{ ...object, newProp: true }","opsSec":640616.4205383289,"samples":321472},{"name":"structuredClone","opsSec":242453.15300008512,"samples":121227},{"name":"JSON.parse + JSON.stringify","opsSec":196826.32896354696,"samples":98414},{"name":"loop + object.keys starting with {}","opsSec":1165723.6309999279,"samples":582862},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":687015.747039549,"samples":343509},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":506187.5992821097,"samples":253094},{"name":"object.keys + reduce(FN, {})","opsSec":1149645.5344721887,"samples":574823},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":649893.025444169,"samples":324947},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":504599.1966916997,"samples":252300}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|256,734|128368|
|Sort using first char|1,064,791|532397|
|Sort using localeCompare|979,905|489953|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:17:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":256734.62425441548,"samples":128368},{"name":"Sort using first char","opsSec":1064791.610806606,"samples":532397},{"name":"Sort using localeCompare","opsSec":979905.7357706841,"samples":489953}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,809|905|
|{...smallObject} - Total keys: 2|13,118,733|6559367|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,232|1117|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,480|3241|
|{ ...bigObject, ...anotherBigObject }|1,071|536|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,155,452|3077727|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,555,071|4777536|
|{ ...smallObject, ...anotherSmallObject }|8,004,253|4002127|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:24:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1809.5436295710615,"samples":905},{"name":"{...smallObject} - Total keys: 2","opsSec":13118733.157413548,"samples":6559367},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2232.9462905440228,"samples":1117},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6480.703937197675,"samples":3241},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1071.9661623624586,"samples":536},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6155452.904020073,"samples":3077727},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9555071.610194605,"samples":4777536},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8004253.3953471985,"samples":4002127}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,395|1198|
|streams.web.Readable reading 1e3 * "some data"|496|249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:32:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2395.061720294395,"samples":1198},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":496.6901406983742,"samples":249}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,108|2055|
|streams.web.WritableStream writing 1e3 * "some data"|2,392|1198|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:37:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4108.318177705295,"samples":2055},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2392.2303759757347,"samples":1198}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|18,651,285|9325643|
|Using backtick (`)|17,852,744|8926373|
|Using array.join|6,344,733|3172369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:43:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":18651285.158857547,"samples":9325643},{"name":"Using backtick (`)","opsSec":17852744.10775267,"samples":8926373},{"name":"Using array.join","opsSec":6344733.495314233,"samples":3172369}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,512,535|7256268|
|(short string) (true) String#slice and strict comparison|15,180,412|7590207|
|(long string) (true) String#endsWith|14,438,994|7219498|
|(long string) (true) String#slice and strict comparison|14,789,636|7394819|
|(short string) (false) String#endsWith|15,852,182|7926092|
|(short string) (false) String#slice and strict comparison|15,025,373|7512687|
|(long string) (false) String#endsWith|14,402,472|7201237|
|(long string) (false) String#slice and strict comparison|14,808,461|7404231|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:54:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14512535.925068114,"samples":7256268},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15180412.818583772,"samples":7590207},{"name":"(long string) (true) String#endsWith","opsSec":14438994.312194781,"samples":7219498},{"name":"(long string) (true) String#slice and strict comparison","opsSec":14789636.973457083,"samples":7394819},{"name":"(short string) (false) String#endsWith","opsSec":15852182.912107522,"samples":7926092},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15025373.556015195,"samples":7512687},{"name":"(long string) (false) String#endsWith","opsSec":14402472.851066256,"samples":7201237},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14808461.799086088,"samples":7404231}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,967,379|4483690|
|Using indexof|9,296,826|4648414|
|Using RegExp.test|8,400,919|4200460|
|Using RegExp.text with cached regex pattern|8,564,586|4282294|
|Using new RegExp.test|3,360,559|1680280|
|Using new RegExp.test with cached regex pattern|3,661,272|1830637|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:08:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8967379.198053386,"samples":4483690},{"name":"Using indexof","opsSec":9296826.695083573,"samples":4648414},{"name":"Using RegExp.test","opsSec":8400919.360688102,"samples":4200460},{"name":"Using RegExp.text with cached regex pattern","opsSec":8564586.224837897,"samples":4282294},{"name":"Using new RegExp.test","opsSec":3360559.7549268687,"samples":1680280},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3661272.2739736005,"samples":1830637}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,117,958|7058980|
|(short string) (true) String#slice and strict comparison|14,510,834|7255418|
|(long string) (true) String#startsWith|14,080,252|7040127|
|(long string) (true) String#slice and strict comparison|13,819,952|6909977|
|(short string) (false) String#startsWith|7,666,575|3833288|
|(short string) (false) String#slice and strict comparison|14,954,484|7477243|
|(long string) (false) String#startsWith|6,827,136|3413569|
|(long string) (false) String#slice and strict comparison|14,124,000|7062001|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:19:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14117958.588180244,"samples":7058980},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14510834.52845841,"samples":7255418},{"name":"(long string) (true) String#startsWith","opsSec":14080252.539707696,"samples":7040127},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13819952.513985017,"samples":6909977},{"name":"(short string) (false) String#startsWith","opsSec":7666575.0524862185,"samples":3833288},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14954484.858951932,"samples":7477243},{"name":"(long string) (false) String#startsWith","opsSec":6827136.786079739,"samples":3413569},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14124000.462770889,"samples":7062001}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|9,982,913|4991458|
|Using this|17,654,579|8827290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:33:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":9982913.381058611,"samples":4991458},{"name":"Using this","opsSec":17654579.85031104,"samples":8827290}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,421,907|3210954|
|Date.now()|10,021,762|5010882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6421907.41263098,"samples":3210954},{"name":"Date.now()","opsSec":10021762.828683842,"samples":5010882}]}-->
