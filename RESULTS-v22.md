## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|100,723,818|50367465|
|Using dot notation|67,137,503|33568759|
|Using define property (writable)|4,756,784|2378865|
|Using define property initialized (writable)|6,710,486|3355381|
|Using define property (getter)|2,365,987|1182996|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:01:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":100723818.14838186,"samples":50367465},{"name":"Using dot notation","opsSec":67137503.09547432,"samples":33568759},{"name":"Using define property (writable)","opsSec":4756784.094455681,"samples":2378865},{"name":"Using define property initialized (writable)","opsSec":6710486.064813016,"samples":3355381},{"name":"Using define property (getter)","opsSec":2365987.8169335397,"samples":1182996}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.076ms
new Array(length)|100|0.007ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.263ms
new Array(length)|10,000|0.13ms
array.push|1,000,000|28.986ms
new Array(length)|1,000,000|5.929ms
array.push|100,000,000|1,855.534ms
new Array(length)|100,000,000|3,922.629ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|17.447ms
new Array(length)|10,000|6.031ms
array.push|1,000,000|143.185ms
new Array(length)|1,000,000|8.426ms
array.push|100,000,000|1,981.165ms
new Array(length)|100,000,000|4,463.971ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|326|164|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:05:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Array","opsSec":326.9936971705668,"samples":164},{"name":"Array.from","opsSec":24.147356785467906,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,774|2388|
|new Blob (1024)|553|289|
|text (128)|4,194|2098|
|text (1024)|527|264|
|arrayBuffer (128)|4,187|2094|
|arrayBuffer (1024)|525|263|
|slice (0, 64)|149,110|87710|
|slice (0, 512)|39,641|19821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:16:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4774.648755303772,"samples":2388},{"name":"new Blob (1024)","opsSec":553.6435631552614,"samples":289},{"name":"text (128)","opsSec":4194.627937201869,"samples":2098},{"name":"text (1024)","opsSec":527.371609304196,"samples":264},{"name":"arrayBuffer (128)","opsSec":4187.2899193756175,"samples":2094},{"name":"arrayBuffer (1024)","opsSec":525.0730758973702,"samples":263},{"name":"slice (0, 64)","opsSec":149110.32249118472,"samples":87710},{"name":"slice (0, 512)","opsSec":39641.40989797482,"samples":19821}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|447,408|223826|
|[True conditional] Using constructor name|357,577|178790|
|[True conditional] Check if property is valid then instanceof |343,301|171677|
|[False conditional] Using instanceof only|98,239,972|49133431|
|[False conditional] Using constructor name|98,107,066|49062712|
|[False conditional] Check if property is valid then instanceof |98,548,090|49274054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:09:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":447408.61508229864,"samples":223826},{"name":"[True conditional] Using constructor name","opsSec":357577.8838540833,"samples":178790},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":343301.7920366742,"samples":171677},{"name":"[False conditional] Using instanceof only","opsSec":98239972.54063596,"samples":49133431},{"name":"[False conditional] Using constructor name","opsSec":98107066.20577157,"samples":49062712},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":98548090.65553606,"samples":49274054}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,553|3277|
|crypto.verify('RSA-SHA256')|6,852|3427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:11:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6553.437767467054,"samples":3277},{"name":"crypto.verify('RSA-SHA256')","opsSec":6852.039056054783,"samples":3427}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,365,082|682627|
|fromUnixToISOString(new Date())|2,012,609|1011470|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:13:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1365082.1197801344,"samples":682627},{"name":"fromUnixToISOString(new Date())","opsSec":2012609.913324856,"samples":1011470}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,479|9240|
|Intl.DateTimeFormat().format(new Date())|18,572|9287|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,604|9303|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,279|9140|
|Reusing Intl.DateTimeFormat()|509,249|254642|
|Date.toLocaleDateString()|945,041|472742|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,651|11327|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:15:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18479.917099091894,"samples":9240},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18572.31504528983,"samples":9287},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18604.295958116014,"samples":9303},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18279.52758388912,"samples":9140},{"name":"Reusing Intl.DateTimeFormat()","opsSec":509249.92099528696,"samples":254642},{"name":"Date.toLocaleDateString()","opsSec":945041.7091396222,"samples":472742},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22651.908005688045,"samples":11327}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|823,210|411608|
|Using brackets {}|935,620|467954|
|Using '' + |913,820|456911|
|Using date.toString()|1,174,972|587513|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:17:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":823210.3313736581,"samples":411608},{"name":"Using brackets {}","opsSec":935620.1845188383,"samples":467954},{"name":"Using '' + ","opsSec":913820.6146479482,"samples":456911},{"name":"Using date.toString()","opsSec":1174972.2262210948,"samples":587513}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,878,344|1953130|
|Using delete property (proto: null)|15,878,847|7939633|
|Using delete property (cached proto: null)|3,735,200|1867639|
|Using undefined assignment|65,618,528|32810305|
|Using undefined assignment (proto: null)|17,793,105|8897751|
|Using undefined property (cached proto: null)|65,215,951|32609083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:18:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3878344.1211472126,"samples":1953130},{"name":"Using delete property (proto: null)","opsSec":15878847.433581652,"samples":7939633},{"name":"Using delete property (cached proto: null)","opsSec":3735200.726167377,"samples":1867639},{"name":"Using undefined assignment","opsSec":65618528.05534186,"samples":32810305},{"name":"Using undefined assignment (proto: null)","opsSec":17793105.16197605,"samples":8897751},{"name":"Using undefined property (cached proto: null)","opsSec":65215951.527149945,"samples":32609083}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|425,541|212782|
|NodeError|343,915|171958|
|NodeError Range|337,325|168665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:20:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Error","opsSec":425541.55098101957,"samples":212782},{"name":"NodeError","opsSec":343915.4428569826,"samples":171958},{"name":"NodeError Range","opsSec":337325.78342770715,"samples":168665}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,890,885|945636|
|Function returning explicitly undefined|1,812,860|906592|
|Function returning implicitly undefined|1,666,501|833566|
|Function returning string|1,866,519|933554|
|Function returning integer|1,709,571|855770|
|Function returning float|1,882,672|941588|
|Function returning functions|1,791,470|896309|
|Function returning arrow functions|1,725,640|863354|
|Function returning empty object|1,739,261|870698|
|Function returning empty array|1,711,886|855945|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:23:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1890885.3857922503,"samples":945636},{"name":"Function returning explicitly undefined","opsSec":1812860.6907986815,"samples":906592},{"name":"Function returning implicitly undefined","opsSec":1666501.4091987705,"samples":833566},{"name":"Function returning string","opsSec":1866519.1244153616,"samples":933554},{"name":"Function returning integer","opsSec":1709571.2030962359,"samples":855770},{"name":"Function returning float","opsSec":1882672.7879212077,"samples":941588},{"name":"Function returning functions","opsSec":1791470.6991689554,"samples":896309},{"name":"Function returning arrow functions","opsSec":1725640.811952664,"samples":863354},{"name":"Function returning empty object","opsSec":1739261.1647544564,"samples":870698},{"name":"Function returning empty array","opsSec":1711886.4255811435,"samples":855945}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|91,375,636|45741874|
|using Array.includes (first item)|78,629,204|39350059|
|Using raw comparison|96,739,280|48369644|
|Using raw comparison (first item)|98,485,960|49831085|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:24:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":91375636.00250727,"samples":45741874},{"name":"using Array.includes (first item)","opsSec":78629204.67917599,"samples":39350059},{"name":"Using raw comparison","opsSec":96739280.26085758,"samples":48369644},{"name":"Using raw comparison (first item)","opsSec":98485960.64184703,"samples":49831085}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,364,568|24182293|
|Using Object.getOwnPropertyNames()|41,453,410|20740470|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:26:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using Object.keys()","opsSec":48364568.0083807,"samples":24182293},{"name":"Using Object.getOwnPropertyNames()","opsSec":41453410.87274624,"samples":20740470}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,601,598|66312852|
|Length = 10_000 - Array.at|95,566,245|47783548|
|Length = 1_000_000 - Array.at|100,040,013|50020039|
|Length = 100 - Array[length - 1]|99,069,559|49542730|
|Length = 10_000 - Array[length - 1]|98,373,555|49192290|
|Length = 1_000_000 - Array[length - 1]|96,519,320|48260128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:28:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132601598.88574496,"samples":66312852},{"name":"Length = 10_000 - Array.at","opsSec":95566245.6515462,"samples":47783548},{"name":"Length = 1_000_000 - Array.at","opsSec":100040013.97439104,"samples":50020039},{"name":"Length = 100 - Array[length - 1]","opsSec":99069559.53383394,"samples":49542730},{"name":"Length = 10_000 - Array[length - 1]","opsSec":98373555.27566026,"samples":49192290},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96519320.14867184,"samples":48260128}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|139,703,749|69851883|
|~ (small)|97,410,047|48717361|
|Math.floor (long)|98,547,559|49273785|
|~ (long)|99,598,000|49799006|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:30:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":139703749.51495755,"samples":69851883},{"name":"~ (small)","opsSec":97410047.25574975,"samples":48717361},{"name":"Math.floor (long)","opsSec":98547559.55395867,"samples":49273785},{"name":"~ (long)","opsSec":99598000.24743597,"samples":49799006}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,700,742|20853128|
|Object.create({})|1,955,594|983746|
|Cached Empty.prototype|111,725,638|56052150|
|Empty.prototype|2,475,183|1243218|
|Empty class|1,558,774|780522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:32:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":41700742.828192174,"samples":20853128},{"name":"Object.create({})","opsSec":1955594.4139019058,"samples":983746},{"name":"Cached Empty.prototype","opsSec":111725638.57194684,"samples":56052150},{"name":"Empty.prototype","opsSec":2475183.114608983,"samples":1243218},{"name":"Empty class","opsSec":1558774.3808557913,"samples":780522}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|138,282,152|69156878|
|Using optional chain (obj.field?.field2) (undefined)|93,710,258|46855320|
|Using and operator (obj.field && obj.field.field2) (Valid)|95,404,679|47709491|
|Using and operator (obj.field && obj.field.field2) (undefined)|94,937,485|47476067|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:34:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":138282152.720253,"samples":69156878},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":93710258.41182774,"samples":46855320},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":95404679.31209624,"samples":47709491},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":94937485.33588764,"samples":47476067}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|138,702,748|69351386|
|Using parseInt(x, 10) - big number (10 len)|94,359,732|47184644|
|Using + - small number (2 len)|94,888,625|47447221|
|Using + - big number (10 len)|97,106,876|48568022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:36:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":138702748.42053276,"samples":69351386},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":94359732.00122078,"samples":47184644},{"name":"Using + - small number (2 len)","opsSec":94888625.51703304,"samples":47447221},{"name":"Using + - big number (10 len)","opsSec":97106876.39596444,"samples":48568022}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|983,088|491576|
|Using ? operator to avoid rejection|1,050,337|536723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:38:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using if to check function existence","opsSec":983088.1484247597,"samples":491576},{"name":"Using ? operator to avoid rejection","opsSec":1050337.9393332566,"samples":536723}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|140,447,330|70228916|
|Raw usage underscore usage|96,476,340|48244191|
|Manipulating private properties using #|93,472,605|46746366|
|Manipulating private properties using underscore(_)|99,258,169|49629093|
|Manipulating private properties using Symbol|99,352,525|49676272|
|Manipulating private properties using PrivateSymbol|36,073,705|18038494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:40:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Raw usage private field","opsSec":140447330.47220594,"samples":70228916},{"name":"Raw usage underscore usage","opsSec":96476340.20912045,"samples":48244191},{"name":"Manipulating private properties using #","opsSec":93472605.29168338,"samples":46746366},{"name":"Manipulating private properties using underscore(_)","opsSec":99258169.92017646,"samples":49629093},{"name":"Manipulating private properties using Symbol","opsSec":99352525.71913528,"samples":49676272},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36073705.076395825,"samples":18038494}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,374,956|3687484|
|Adding property in the object creation - small object|7,420,187|3710095|
|Adding property after the function creation - small class|241,982|121684|
|Adding property in the function creation - small class|277,113|138560|
|Adding property after the class creation - small class|265,214|132610|
|Adding property in the class creation - small class|265,260|132631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:41:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7374956.952314485,"samples":3687484},{"name":"Adding property in the object creation - small object","opsSec":7420187.165488502,"samples":3710095},{"name":"Adding property after the function creation - small class","opsSec":241982.12337078058,"samples":121684},{"name":"Adding property in the function creation - small class","opsSec":277113.0389204623,"samples":138560},{"name":"Adding property after the class creation - small class","opsSec":265214.66335054405,"samples":132610},{"name":"Adding property in the class creation - small class","opsSec":265260.1882729141,"samples":132631}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|126,782,325|63391238|
|Getter|48,756,239|24378123|
|Method|97,496,728|48749846|
|DefineProperty (getter)|95,586,207|47793412|
|DefineProperty (getter & enumerable=false)|51,653,240|25826629|
|DefineProperty (getter & configurable=false)|97,138,026|48569508|
|DefineProperty (getter & enumerable=false & configurable=false)|51,859,187|25933428|
|DefineProperty (writable)|96,136,584|48068311|
|DefineProperty (writable & enumerable=false)|91,787,916|45895603|
|DefineProperty (writable & enumerable=false & configurable=false)|90,465,822|45233252|
|DefineProperties (getter)|51,308,687|25656881|
|DefineProperties (getter & enumerable=false)|50,698,933|25350784|
|DefineProperties (getter & enumerable=false & configurable=false)|51,374,269|25687149|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:44:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":126782325.88972615,"samples":63391238},{"name":"Getter","opsSec":48756239.17412651,"samples":24378123},{"name":"Method","opsSec":97496728.29445331,"samples":48749846},{"name":"DefineProperty (getter)","opsSec":95586207.27779064,"samples":47793412},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51653240.64451114,"samples":25826629},{"name":"DefineProperty (getter & configurable=false)","opsSec":97138026.55206154,"samples":48569508},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51859187.89304138,"samples":25933428},{"name":"DefineProperty (writable)","opsSec":96136584.12218586,"samples":48068311},{"name":"DefineProperty (writable & enumerable=false)","opsSec":91787916.68821757,"samples":45895603},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":90465822.97328465,"samples":45233252},{"name":"DefineProperties (getter)","opsSec":51308687.57079925,"samples":25656881},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50698933.07505022,"samples":25350784},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51374269.53865467,"samples":25687149}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|140,660,045|71139840|
|Setter|11,248,841|5624423|
|Method|94,182,420|47095375|
|DefineProperty (setter)|100,431,413|50217986|
|DefineProperty (setter & enumerable=false)|11,110,283|5555145|
|DefineProperty (setter & configurable=false)|11,310,184|5655094|
|DefineProperty (setter & enumerable=false & configurable=false)|11,361,700|5680938|
|DefineProperty (writable)|100,691,663|50350957|
|DefineProperty (writable & enumerable=false)|100,681,106|50340566|
|DefineProperty (writable & enumerable=false & configurable=false)|98,688,850|49347728|
|DefineProperties (setter)|99,403,480|49703362|
|DefineProperties (setter & enumerable=false)|11,413,930|5707049|
|DefineProperties (setter & enumerable=false & configurable=false)|11,244,279|5622168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:46:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":140660045.12793288,"samples":71139840},{"name":"Setter","opsSec":11248841.657947121,"samples":5624423},{"name":"Method","opsSec":94182420.3183822,"samples":47095375},{"name":"DefineProperty (setter)","opsSec":100431413.61899866,"samples":50217986},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11110283.51159443,"samples":5555145},{"name":"DefineProperty (setter & configurable=false)","opsSec":11310184.96887043,"samples":5655094},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11361700.961634986,"samples":5680938},{"name":"DefineProperty (writable)","opsSec":100691663.99137233,"samples":50350957},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100681106.42699897,"samples":50340566},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98688850.36048998,"samples":49347728},{"name":"DefineProperties (setter)","opsSec":99403480.46443245,"samples":49703362},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11413930.831569042,"samples":5707049},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11244279.711135766,"samples":5622168}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,329,996|1665348|
|Using replaceAll()|3,127,779|1564066|
|Using replaceAll(//g)|2,942,777|1471389|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:48:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3329996.201298297,"samples":1665348},{"name":"Using replaceAll()","opsSec":3127779.0739204152,"samples":1564066},{"name":"Using replaceAll(//g)","opsSec":2942777.7351500043,"samples":1471389}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,652,961|11828800|
|{ ...object, __proto__: null }|2,431,259|1215796|
|{ ...object, newProp: true }|20,481,963|10240984|
|structuredClone|297,201|148601|
|JSON.parse + JSON.stringify|300,489|150245|
|loop + object.keys starting with {}|1,630,527|815308|
|loop + object.keys starting with { __proto__: null }|869,476|434770|
|loop + object.keys starting with { randomProp: true }|631,689|315928|
|object.keys + reduce(FN, {})|1,718,498|859385|
|object.keys + reduce(FN, { __proto__: null })|913,648|456825|
|object.keys + reduce(FN, { newProp: true })|654,011|327028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:40:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":23652961.98529615,"samples":11828800},{"name":"{ ...object, __proto__: null }","opsSec":2431259.7683526548,"samples":1215796},{"name":"{ ...object, newProp: true }","opsSec":20481963.78071546,"samples":10240984},{"name":"structuredClone","opsSec":297201.2926609235,"samples":148601},{"name":"JSON.parse + JSON.stringify","opsSec":300489.1910830976,"samples":150245},{"name":"loop + object.keys starting with {}","opsSec":1630527.090618803,"samples":815308},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":869476.1282836163,"samples":434770},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":631689.8807219273,"samples":315928},{"name":"object.keys + reduce(FN, {})","opsSec":1718498.549406133,"samples":859385},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":913648.6715548316,"samples":456825},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":654011.121756825,"samples":327028}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|308,630|154338|
|Sort using first char|1,299,155|649606|
|Sort using localeCompare|1,168,637|584392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:41:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":308630.5350186254,"samples":154338},{"name":"Sort using first char","opsSec":1299155.0580338063,"samples":649606},{"name":"Sort using localeCompare","opsSec":1168637.775366995,"samples":584392}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,775|888|
|{...smallObject} - Total keys: 2|57,668,762|28834519|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,050|526|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,530|3266|
|{ ...bigObject, ...anotherBigObject }|1,104|553|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,002,389|6502731|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,058,878|14029445|
|{ ...smallObject, ...anotherSmallObject }|20,628,644|10347231|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:43:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1775.7548286338297,"samples":888},{"name":"{...smallObject} - Total keys: 2","opsSec":57668762.22797903,"samples":28834519},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1050.4490833589582,"samples":526},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6530.486611971569,"samples":3266},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1104.310433748436,"samples":553},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13002389.977329617,"samples":6502731},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28058878.327506617,"samples":14029445},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20628644.412167694,"samples":10347231}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,948|975|
|streams.web.Readable reading 1e3 * "some data"|1,805|903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:44:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1948.4947838824612,"samples":975},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1805.9294495601234,"samples":903}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|11,536|5769|
|streams.web.WritableStream writing 1e3 * "some data"|1,739|870|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:45:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":11536.546533575329,"samples":5769},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1739.3350626415624,"samples":870}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|151,707,267|75854916|
|Using backtick (`)|96,896,722|48503086|
|Using array.join|9,853,041|4926521|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":151707267.5403495,"samples":75854916},{"name":"Using backtick (`)","opsSec":96896722.88804214,"samples":48503086},{"name":"Using array.join","opsSec":9853041.684702666,"samples":4926521}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|128,046,006|64028283|
|(short string) (true) String#slice and strict comparison|58,948,516|29474270|
|(long string) (true) String#endsWith|64,159,462|32090719|
|(long string) (true) String#slice and strict comparison|53,276,523|26640096|
|(short string) (false) String#endsWith|94,658,004|47343231|
|(short string) (false) String#slice and strict comparison|58,866,744|29433383|
|(long string) (false) String#endsWith|84,045,751|42031940|
|(long string) (false) String#slice and strict comparison|52,673,381|26336694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:47:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":128046006.8140941,"samples":64028283},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58948516.18479947,"samples":29474270},{"name":"(long string) (true) String#endsWith","opsSec":64159462.10104115,"samples":32090719},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53276523.80478299,"samples":26640096},{"name":"(short string) (false) String#endsWith","opsSec":94658004.58544946,"samples":47343231},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58866744.21930464,"samples":29433383},{"name":"(long string) (false) String#endsWith","opsSec":84045751.49949305,"samples":42031940},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52673381.679194205,"samples":26336694}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|131,853,024|65926579|
|Using indexof|15,420,275|7710140|
|Using RegExp.test|12,674,576|6337976|
|Using RegExp.text with cached regex pattern|13,121,844|6560923|
|Using new RegExp.test|4,667,266|2333917|
|Using new RegExp.test with cached regex pattern|5,300,486|2650577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:48:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":131853024.56473914,"samples":65926579},{"name":"Using indexof","opsSec":15420275.0038309,"samples":7710140},{"name":"Using RegExp.test","opsSec":12674576.783069883,"samples":6337976},{"name":"Using RegExp.text with cached regex pattern","opsSec":13121844.005479712,"samples":6560923},{"name":"Using new RegExp.test","opsSec":4667266.824400965,"samples":2333917},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5300486.711126963,"samples":2650577}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|123,392,118|61913525|
|(short string) (true) String#slice and strict comparison|57,416,476|28708261|
|(long string) (true) String#startsWith|64,346,430|32173222|
|(long string) (true) String#slice and strict comparison|53,404,159|26702095|
|(short string) (false) String#startsWith|93,196,403|46599257|
|(short string) (false) String#slice and strict comparison|58,719,408|29361388|
|(long string) (false) String#startsWith|88,559,096|44287741|
|(long string) (false) String#slice and strict comparison|52,459,588|26238342|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:50:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":123392118.2021139,"samples":61913525},{"name":"(short string) (true) String#slice and strict comparison","opsSec":57416476.985482045,"samples":28708261},{"name":"(long string) (true) String#startsWith","opsSec":64346430.229863934,"samples":32173222},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53404159.66643731,"samples":26702095},{"name":"(short string) (false) String#startsWith","opsSec":93196403.28785834,"samples":46599257},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58719408.7942221,"samples":29361388},{"name":"(long string) (false) String#startsWith","opsSec":88559096.44173996,"samples":44287741},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52459588.15465464,"samples":26238342}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|127,608,594|63805188|
|Using this|99,470,384|49736963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:51:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":127608594.58401962,"samples":63805188},{"name":"Using this","opsSec":99470384.8542992,"samples":49736963}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,030,334|5015678|
|Date.now()|19,246,996|9623501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:52:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":10030334.249971291,"samples":5015678},{"name":"Date.now()","opsSec":19246996.803310864,"samples":9623501}]}-->
