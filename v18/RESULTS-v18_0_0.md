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
array.push|100|0.026ms
new Array(length)|100|0.009ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.373ms
new Array(length)|10,000|0.145ms
array.push|1,000,000|28.421ms
new Array(length)|1,000,000|17.067ms
array.push|100,000,000|1,979.134ms
new Array(length)|100,000,000|4,110.337ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.46ms
new Array(length)|10,000|3.181ms
array.push|1,000,000|252.52ms
new Array(length)|1,000,000|4.6ms
array.push|100,000,000|2,299.391ms
new Array(length)|100,000,000|4,426.404ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|270|136|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:31:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":270.26855638493794,"samples":136},{"name":"Array.from","opsSec":21.45124070974042,"samples":11}]}-->

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
|[True conditional] Using instanceof only|266,928|133465|
|[True conditional] Using constructor name|271,176|135589|
|[True conditional] Check if property is valid then instanceof |281,056|140529|
|[False conditional] Using instanceof only|12,631,090|6315546|
|[False conditional] Using constructor name|18,515,699|9257850|
|[False conditional] Check if property is valid then instanceof |17,272,496|8636249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:43:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":266928.04286433687,"samples":133465},{"name":"[True conditional] Using constructor name","opsSec":271176.1706583937,"samples":135589},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":281056.6987136742,"samples":140529},{"name":"[False conditional] Using instanceof only","opsSec":12631090.689909179,"samples":6315546},{"name":"[False conditional] Using constructor name","opsSec":18515699.78269861,"samples":9257850},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17272496.87477372,"samples":8636249}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,079|1040|
|crypto.verify('RSA-SHA256')|2,104|1053|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:52:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":2079.8285763257277,"samples":1040},{"name":"crypto.verify('RSA-SHA256')","opsSec":2104.5404338749513,"samples":1053}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,048,171|1024086|
|fromUnixToISOString(new Date())|1,778,880|889441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:57:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2048171.0658437614,"samples":1024086},{"name":"fromUnixToISOString(new Date())","opsSec":1778880.3958526712,"samples":889441}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,777|7889|
|Intl.DateTimeFormat().format(new Date())|15,477|7739|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,422|8212|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,092|8047|
|Reusing Intl.DateTimeFormat()|616,637|308319|
|Date.toLocaleDateString()|627,635|313818|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,141|8071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:03:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15777.352213602264,"samples":7889},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15477.62590629913,"samples":7739},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16422.32410130758,"samples":8212},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16092.23114347081,"samples":8047},{"name":"Reusing Intl.DateTimeFormat()","opsSec":616637.5547495509,"samples":308319},{"name":"Date.toLocaleDateString()","opsSec":627635.5480036859,"samples":313818},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16141.28971872064,"samples":8071}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|892,902|446452|
|Using brackets {}|908,727|454364|
|Using '' + |904,487|452244|
|Using date.toString()|1,006,664|503333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:09:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":892902.5414522385,"samples":446452},{"name":"Using brackets {}","opsSec":908727.5054301226,"samples":454364},{"name":"Using '' + ","opsSec":904487.9689317073,"samples":452244},{"name":"Using date.toString()","opsSec":1006664.0830879223,"samples":503333}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,722,165|1361083|
|Using delete property (proto: null)|8,387,797|4193899|
|Using delete property (cached proto: null)|2,694,965|1347483|
|Using undefined assignment|15,960,402|7983047|
|Using undefined assignment (proto: null)|9,116,171|4558086|
|Using undefined property (cached proto: null)|15,066,697|7533349|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:16:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2722165.3042764333,"samples":1361083},{"name":"Using delete property (proto: null)","opsSec":8387797.390074569,"samples":4193899},{"name":"Using delete property (cached proto: null)","opsSec":2694965.072177011,"samples":1347483},{"name":"Using undefined assignment","opsSec":15960402.996059248,"samples":7983047},{"name":"Using undefined assignment (proto: null)","opsSec":9116171.358327022,"samples":4558086},{"name":"Using undefined property (cached proto: null)","opsSec":15066697.73624133,"samples":7533349}]}-->

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
|Adding property after object creation - small object|3,107,939|1553970|
|Adding property in the object creation - small object|3,106,887|1553444|
|Adding property after the function creation - small class|247,460|123731|
|Adding property in the function creation - small class|245,670|122836|
|Adding property after the class creation - small class|214,623|107312|
|Adding property in the class creation - small class|213,134|106568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:25:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3107939.9076135214,"samples":1553970},{"name":"Adding property in the object creation - small object","opsSec":3106887.1286471584,"samples":1553444},{"name":"Adding property after the function creation - small class","opsSec":247460.51426825474,"samples":123731},{"name":"Adding property in the function creation - small class","opsSec":245670.51822632866,"samples":122836},{"name":"Adding property after the class creation - small class","opsSec":214623.04873383397,"samples":107312},{"name":"Adding property in the class creation - small class","opsSec":213134.23144820545,"samples":106568}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|21,070,157|10535079|
|Getter|17,272,778|8636390|
|Method|20,206,433|10103217|
|DefineProperty (getter)|20,212,913|10106457|
|DefineProperty (getter & enumerable=false)|16,498,829|8249416|
|DefineProperty (getter & configurable=false)|20,497,764|10248883|
|DefineProperty (getter & enumerable=false & configurable=false)|16,306,998|8153500|
|DefineProperty (writable)|19,798,632|9899317|
|DefineProperty (writable & enumerable=false)|20,195,271|10097636|
|DefineProperty (writable & enumerable=false & configurable=false)|19,666,147|9833075|
|DefineProperties (getter)|16,853,498|8426750|
|DefineProperties (getter & enumerable=false)|16,523,479|8261740|
|DefineProperties (getter & enumerable=false & configurable=false)|16,743,010|8371506|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:31:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":21070157.440113332,"samples":10535079},{"name":"Getter","opsSec":17272778.492853142,"samples":8636390},{"name":"Method","opsSec":20206433.55482465,"samples":10103217},{"name":"DefineProperty (getter)","opsSec":20212913.489661228,"samples":10106457},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16498829.893603893,"samples":8249416},{"name":"DefineProperty (getter & configurable=false)","opsSec":20497764.161477342,"samples":10248883},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16306998.054505268,"samples":8153500},{"name":"DefineProperty (writable)","opsSec":19798632.096145354,"samples":9899317},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20195271.901782993,"samples":10097636},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19666147.43370161,"samples":9833075},{"name":"DefineProperties (getter)","opsSec":16853498.09754538,"samples":8426750},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16523479.756981812,"samples":8261740},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16743010.7609376,"samples":8371506}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|20,351,173|10175587|
|Setter|6,116,768|3058385|
|Method|20,727,785|10363893|
|DefineProperty (setter)|20,796,506|10398254|
|DefineProperty (setter & enumerable=false)|6,196,711|3098356|
|DefineProperty (setter & configurable=false)|6,225,923|3112962|
|DefineProperty (setter & enumerable=false & configurable=false)|6,352,321|3176161|
|DefineProperty (writable)|20,173,050|10086526|
|DefineProperty (writable & enumerable=false)|20,125,349|10062675|
|DefineProperty (writable & enumerable=false & configurable=false)|20,155,590|10077796|
|DefineProperties (setter)|20,792,080|10396041|
|DefineProperties (setter & enumerable=false)|6,173,093|3086547|
|DefineProperties (setter & enumerable=false & configurable=false)|6,118,847|3059424|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:43:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":20351173.199782934,"samples":10175587},{"name":"Setter","opsSec":6116768.184649009,"samples":3058385},{"name":"Method","opsSec":20727785.132273775,"samples":10363893},{"name":"DefineProperty (setter)","opsSec":20796506.826089986,"samples":10398254},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6196711.655359213,"samples":3098356},{"name":"DefineProperty (setter & configurable=false)","opsSec":6225923.440552669,"samples":3112962},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6352321.238082443,"samples":3176161},{"name":"DefineProperty (writable)","opsSec":20173050.919298653,"samples":10086526},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20125349.183284152,"samples":10062675},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":20155590.76758535,"samples":10077796},{"name":"DefineProperties (setter)","opsSec":20792080.13426573,"samples":10396041},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6173093.3473000005,"samples":3086547},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6118847.006548117,"samples":3059424}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,767,107|1383554|
|Using replaceAll()|2,645,592|1322797|
|Using replaceAll(//g)|2,616,506|1308254|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:54:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2767107.280775988,"samples":1383554},{"name":"Using replaceAll()","opsSec":2645592.9710209635,"samples":1322797},{"name":"Using replaceAll(//g)","opsSec":2616506.5340287616,"samples":1308254}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,998,404|5999203|
|{ ...object, __proto__: null }|10,873,160|5436581|
|{ ...object, newProp: true }|710,633|355318|
|structuredClone|273,154|136578|
|JSON.parse + JSON.stringify|180,536|90269|
|loop + object.keys starting with {}|1,269,147|634574|
|loop + object.keys starting with { __proto__: null }|704,327|352164|
|loop + object.keys starting with { randomProp: true }|565,823|282912|
|object.keys + reduce(FN, {})|1,241,043|620522|
|object.keys + reduce(FN, { __proto__: null })|700,336|350169|
|object.keys + reduce(FN, { newProp: true })|572,308|286155|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:59:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11998404.982102882,"samples":5999203},{"name":"{ ...object, __proto__: null }","opsSec":10873160.233506862,"samples":5436581},{"name":"{ ...object, newProp: true }","opsSec":710633.7063752686,"samples":355318},{"name":"structuredClone","opsSec":273154.54968088516,"samples":136578},{"name":"JSON.parse + JSON.stringify","opsSec":180536.93382069957,"samples":90269},{"name":"loop + object.keys starting with {}","opsSec":1269147.481084638,"samples":634574},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":704327.8817389224,"samples":352164},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":565823.0499117074,"samples":282912},{"name":"object.keys + reduce(FN, {})","opsSec":1241043.9671286992,"samples":620522},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":700336.7568159899,"samples":350169},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":572308.2598796882,"samples":286155}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|280,192|140097|
|Sort using first char|1,236,613|618307|
|Sort using localeCompare|1,168,345|584173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:04:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":280192.1177971065,"samples":140097},{"name":"Sort using first char","opsSec":1236613.279169032,"samples":618307},{"name":"Sort using localeCompare","opsSec":1168345.0836100567,"samples":584173}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,043|1022|
|{...smallObject} - Total keys: 2|14,840,742|7420372|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,386|1194|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,439|3220|
|{ ...bigObject, ...anotherBigObject }|1,296|649|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,717,851|3358926|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,725,305|5862653|
|{ ...smallObject, ...anotherSmallObject }|10,280,287|5140144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:08:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2043.1755622465714,"samples":1022},{"name":"{...smallObject} - Total keys: 2","opsSec":14840742.88300013,"samples":7420372},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2386.260339801804,"samples":1194},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6439.36983066778,"samples":3220},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1296.1152255057793,"samples":649},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6717851.4839399485,"samples":3358926},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11725305.923734425,"samples":5862653},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":10280287.392455522,"samples":5140144}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,332|1167|
|streams.web.Readable reading 1e3 * "some data"|558|280|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:15:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2332.700891139162,"samples":1167},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":558.1188548285969,"samples":280}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,729|2365|
|streams.web.WritableStream writing 1e3 * "some data"|2,101|1051|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:20:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4729.233041424892,"samples":2365},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2101.7407460079176,"samples":1051}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|20,377,560|10188781|
|Using backtick (`)|21,048,363|10524182|
|Using array.join|6,876,369|3438185|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:25:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":20377560.455715507,"samples":10188781},{"name":"Using backtick (`)","opsSec":21048363.37772821,"samples":10524182},{"name":"Using array.join","opsSec":6876369.972282975,"samples":3438185}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|16,471,891|8235946|
|(short string) (true) String#slice and strict comparison|19,836,761|9918381|
|(long string) (true) String#endsWith|16,075,224|8037613|
|(long string) (true) String#slice and strict comparison|19,871,592|9935797|
|(short string) (false) String#endsWith|16,274,435|8137218|
|(short string) (false) String#slice and strict comparison|20,399,442|10199722|
|(long string) (false) String#endsWith|15,855,633|7927817|
|(long string) (false) String#slice and strict comparison|18,321,749|9160875|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:30:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":16471891.63820624,"samples":8235946},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19836761.597700946,"samples":9918381},{"name":"(long string) (true) String#endsWith","opsSec":16075224.845958494,"samples":8037613},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19871592.553947773,"samples":9935797},{"name":"(short string) (false) String#endsWith","opsSec":16274435.946648244,"samples":8137218},{"name":"(short string) (false) String#slice and strict comparison","opsSec":20399442.500489447,"samples":10199722},{"name":"(long string) (false) String#endsWith","opsSec":15855633.154812638,"samples":7927817},{"name":"(long string) (false) String#slice and strict comparison","opsSec":18321749.281901404,"samples":9160875}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,734,861|4867432|
|Using indexof|19,868,967|9934484|
|Using RegExp.test|8,978,349|4489175|
|Using RegExp.text with cached regex pattern|8,794,453|4397227|
|Using new RegExp.test|3,062,191|1531096|
|Using new RegExp.test with cached regex pattern|3,246,855|1623428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:39:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":9734861.994136244,"samples":4867432},{"name":"Using indexof","opsSec":19868967.55900271,"samples":9934484},{"name":"Using RegExp.test","opsSec":8978349.213227225,"samples":4489175},{"name":"Using RegExp.text with cached regex pattern","opsSec":8794453.082830869,"samples":4397227},{"name":"Using new RegExp.test","opsSec":3062191.1083630123,"samples":1531096},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3246855.182261011,"samples":1623428}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|16,112,124|8056063|
|(short string) (true) String#slice and strict comparison|19,348,610|9674306|
|(long string) (true) String#startsWith|15,571,367|7785684|
|(long string) (true) String#slice and strict comparison|20,185,060|10092531|
|(short string) (false) String#startsWith|16,886,732|8443367|
|(short string) (false) String#slice and strict comparison|19,817,982|9908992|
|(long string) (false) String#startsWith|15,979,394|7989698|
|(long string) (false) String#slice and strict comparison|20,084,994|10042498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:48:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":16112124.074183237,"samples":8056063},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19348610.46507363,"samples":9674306},{"name":"(long string) (true) String#startsWith","opsSec":15571367.566507228,"samples":7785684},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20185060.28156388,"samples":10092531},{"name":"(short string) (false) String#startsWith","opsSec":16886732.432396032,"samples":8443367},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19817982.90889984,"samples":9908992},{"name":"(long string) (false) String#startsWith","opsSec":15979394.555615433,"samples":7989698},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20084994.14590009,"samples":10042498}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|10,451,099|5225550|
|Using this|19,703,862|9851932|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:56:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":10451099.462291095,"samples":5225550},{"name":"Using this","opsSec":19703862.692846347,"samples":9851932}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,889,509|3444755|
|Date.now()|9,986,267|4993134|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:01:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6889509.363086878,"samples":3444755},{"name":"Date.now()","opsSec":9986267.06750109,"samples":4993134}]}-->
