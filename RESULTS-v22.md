## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,263,022|8131512|
|Using dot notation|16,299,229|8149615|
|Using define property (writable)|3,698,630|1849316|
|Using define property initialized (writable)|4,678,296|2339149|
|Using define property (getter)|2,313,641|1156821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16263022.861585367,"samples":8131512},{"name":"Using dot notation","opsSec":16299229.641422017,"samples":8149615},{"name":"Using define property (writable)","opsSec":3698630.809045293,"samples":1849316},{"name":"Using define property initialized (writable)","opsSec":4678296.923986799,"samples":2339149},{"name":"Using define property (getter)","opsSec":2313641.157839754,"samples":1156821}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.299ms
new Array(length)|10,000|0.232ms
array.push|1,000,000|22.533ms
new Array(length)|1,000,000|15.518ms
array.push|100,000,000|2,027.094ms
new Array(length)|100,000,000|4,131.195ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.01ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.347ms
new Array(length)|10,000|0.128ms
array.push|1,000,000|16.242ms
new Array(length)|1,000,000|8.093ms
array.push|100,000,000|2,626.893ms
new Array(length)|100,000,000|4,137.495ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|254|128|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:51:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":254.30670642447373,"samples":128},{"name":"Array.from","opsSec":23.999723523185,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,201|3112|
|new Blob (1024)|821|412|
|text (128)|6,467|3234|
|text (1024)|815|408|
|arrayBuffer (128)|6,475|3238|
|arrayBuffer (1024)|804|403|
|slice (0, 64)|200,831|100416|
|slice (0, 512)|38,431|19216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:56:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6201.487508880918,"samples":3112},{"name":"new Blob (1024)","opsSec":821.988725107854,"samples":412},{"name":"text (128)","opsSec":6467.896927594568,"samples":3234},{"name":"text (1024)","opsSec":815.0912059090612,"samples":408},{"name":"arrayBuffer (128)","opsSec":6475.923894942443,"samples":3238},{"name":"arrayBuffer (1024)","opsSec":804.0718774496106,"samples":403},{"name":"slice (0, 64)","opsSec":200831.728475525,"samples":100416},{"name":"slice (0, 512)","opsSec":38431.22807035604,"samples":19216}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|335,349|167675|
|[True conditional] Using constructor name|329,859|164930|
|[True conditional] Check if property is valid then instanceof |332,260|166131|
|[False conditional] Using instanceof only|14,646,397|7323200|
|[False conditional] Using constructor name|14,711,641|7355821|
|[False conditional] Check if property is valid then instanceof |14,629,328|7314665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:02:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":335349.3393617652,"samples":167675},{"name":"[True conditional] Using constructor name","opsSec":329859.81197992706,"samples":164930},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":332260.6948799557,"samples":166131},{"name":"[False conditional] Using instanceof only","opsSec":14646397.861642292,"samples":7323200},{"name":"[False conditional] Using constructor name","opsSec":14711641.705727914,"samples":7355821},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14629328.27374283,"samples":7314665}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,293|3647|
|crypto.verify('RSA-SHA256')|6,911|3456|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:05:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7293.409510979235,"samples":3647},{"name":"crypto.verify('RSA-SHA256')","opsSec":6911.081973337125,"samples":3456}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,289,981|644991|
|fromUnixToISOString(new Date())|1,977,570|988786|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:10:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1289981.5046469865,"samples":644991},{"name":"fromUnixToISOString(new Date())","opsSec":1977570.6512974321,"samples":988786}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,378|8190|
|Intl.DateTimeFormat().format(new Date())|19,808|9905|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,560|10781|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,341|8171|
|Reusing Intl.DateTimeFormat()|1,033,452|516727|
|Date.toLocaleDateString()|1,073,879|536940|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,398|11700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:14:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16378.983159967356,"samples":8190},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19808.77601572931,"samples":9905},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21560.854601160816,"samples":10781},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16341.6940508037,"samples":8171},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1033452.4477546631,"samples":516727},{"name":"Date.toLocaleDateString()","opsSec":1073879.5811872436,"samples":536940},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23398.223747241536,"samples":11700}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,728|521865|
|Using brackets {}|1,025,299|512650|
|Using '' + |1,046,030|523016|
|Using date.toString()|1,172,358|586180|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:18:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1043728.1421639698,"samples":521865},{"name":"Using brackets {}","opsSec":1025299.805193115,"samples":512650},{"name":"Using '' + ","opsSec":1046030.1171458381,"samples":523016},{"name":"Using date.toString()","opsSec":1172358.841709454,"samples":586180}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,343,147|1671574|
|Using delete property (proto: null)|7,796,564|3898283|
|Using delete property (cached proto: null)|3,297,604|1648803|
|Using undefined assignment|16,106,337|8053169|
|Using undefined assignment (proto: null)|8,458,845|4229423|
|Using undefined property (cached proto: null)|16,102,131|8051066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:25:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3343147.5185876265,"samples":1671574},{"name":"Using delete property (proto: null)","opsSec":7796564.581029184,"samples":3898283},{"name":"Using delete property (cached proto: null)","opsSec":3297604.318218919,"samples":1648803},{"name":"Using undefined assignment","opsSec":16106337.22683051,"samples":8053169},{"name":"Using undefined assignment (proto: null)","opsSec":8458845.881581226,"samples":4229423},{"name":"Using undefined property (cached proto: null)","opsSec":16102131.420338184,"samples":8051066}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|295,443|147722|
|NodeError|311,862|155932|
|NodeError Range|320,623|160312|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:29:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":295443.92672992876,"samples":147722},{"name":"NodeError","opsSec":311862.65649565746,"samples":155932},{"name":"NodeError Range","opsSec":320623.1593260736,"samples":160312}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,654,965|827483|
|Function returning explicitly undefined|1,676,600|838301|
|Function returning implicitly undefined|1,661,934|830968|
|Function returning string|1,642,480|821241|
|Function returning integer|1,685,626|842814|
|Function returning float|1,670,523|835262|
|Function returning functions|1,622,869|811435|
|Function returning arrow functions|1,645,222|822612|
|Function returning empty object|1,657,720|828861|
|Function returning empty array|1,663,365|831683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:34:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1654965.920561591,"samples":827483},{"name":"Function returning explicitly undefined","opsSec":1676600.7324902634,"samples":838301},{"name":"Function returning implicitly undefined","opsSec":1661934.5374980099,"samples":830968},{"name":"Function returning string","opsSec":1642480.2359757696,"samples":821241},{"name":"Function returning integer","opsSec":1685626.776235558,"samples":842814},{"name":"Function returning float","opsSec":1670523.752763042,"samples":835262},{"name":"Function returning functions","opsSec":1622869.6527063316,"samples":811435},{"name":"Function returning arrow functions","opsSec":1645222.4962645161,"samples":822612},{"name":"Function returning empty object","opsSec":1657720.1665618883,"samples":828861},{"name":"Function returning empty array","opsSec":1663365.4377835866,"samples":831683}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,823,432|7411717|
|using Array.includes (first item)|15,090,001|7545002|
|Using raw comparison|16,217,123|8108562|
|Using raw comparison (first item)|16,077,055|8038528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:41:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14823432.665890904,"samples":7411717},{"name":"using Array.includes (first item)","opsSec":15090001.495059013,"samples":7545002},{"name":"Using raw comparison","opsSec":16217123.708055863,"samples":8108562},{"name":"Using raw comparison (first item)","opsSec":16077055.260431696,"samples":8038528}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,152,779|7076390|
|Using Object.getOwnPropertyNames()|13,911,291|6955646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:46:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14152779.801858045,"samples":7076390},{"name":"Using Object.getOwnPropertyNames()","opsSec":13911291.304448484,"samples":6955646}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,958,265|7979133|
|Length = 10_000 - Array.at|15,725,201|7862601|
|Length = 1_000_000 - Array.at|15,874,911|7937456|
|Length = 100 - Array[length - 1]|15,881,081|7940542|
|Length = 10_000 - Array[length - 1]|15,959,631|7979816|
|Length = 1_000_000 - Array[length - 1]|15,973,384|7986693|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:53:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15958265.202091668,"samples":7979133},{"name":"Length = 10_000 - Array.at","opsSec":15725201.087917546,"samples":7862601},{"name":"Length = 1_000_000 - Array.at","opsSec":15874911.333209433,"samples":7937456},{"name":"Length = 100 - Array[length - 1]","opsSec":15881081.935414104,"samples":7940542},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15959631.680721328,"samples":7979816},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15973384.945957068,"samples":7986693}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,982,560|6491281|
|Object.create({})|1,758,744|879373|
|Cached Empty.prototype|15,511,338|7755670|
|Empty.prototype|2,550,365|1275183|
|Empty class|1,548,711|774356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:59:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12982560.260338496,"samples":6491281},{"name":"Object.create({})","opsSec":1758744.8673700495,"samples":879373},{"name":"Cached Empty.prototype","opsSec":15511338.976262651,"samples":7755670},{"name":"Empty.prototype","opsSec":2550365.290996613,"samples":1275183},{"name":"Empty class","opsSec":1548711.414586352,"samples":774356}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,118,427|7559214|
|Using optional chain (obj.field?.field2) (undefined)|15,090,377|7545189|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,270,157|7635079|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,030,209|7515105|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:05:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15118427.939525971,"samples":7559214},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15090377.034195395,"samples":7545189},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15270157.572418999,"samples":7635079},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15030209.428858137,"samples":7515105}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,042,692|8021347|
|Using parseInt(x, 10) - big number (10 len)|16,138,480|8069241|
|Using + - small number (2 len)|16,270,863|8135432|
|Using + - big number (10 len)|16,038,759|8019380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:12:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16042692.267391277,"samples":8021347},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16138480.386167003,"samples":8069241},{"name":"Using + - small number (2 len)","opsSec":16270863.804742051,"samples":8135432},{"name":"Using + - big number (10 len)","opsSec":16038759.422587894,"samples":8019380}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,221,291|610646|
|Using ? operator to avoid rejection|1,254,096|627049|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:16:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1221291.8925264357,"samples":610646},{"name":"Using ? operator to avoid rejection","opsSec":1254096.8512473332,"samples":627049}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,035,418|8017710|
|Raw usage underscore usage|16,094,227|8047114|
|Manipulating private properties using #|15,978,053|7989027|
|Manipulating private properties using underscore(_)|16,015,100|8007551|
|Manipulating private properties using Symbol|16,034,312|8017157|
|Manipulating private properties using PrivateSymbol|12,727,542|6363772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:23:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":16035418.620963508,"samples":8017710},{"name":"Raw usage underscore usage","opsSec":16094227.098687643,"samples":8047114},{"name":"Manipulating private properties using #","opsSec":15978053.840252656,"samples":7989027},{"name":"Manipulating private properties using underscore(_)","opsSec":16015100.943036597,"samples":8007551},{"name":"Manipulating private properties using Symbol","opsSec":16034312.909813585,"samples":8017157},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12727542.447262539,"samples":6363772}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,825,528|1912765|
|Adding property in the object creation - small object|3,960,658|1980330|
|Adding property after the function creation - small class|287,660|143831|
|Adding property in the function creation - small class|293,242|146622|
|Adding property after the class creation - small class|314,304|157153|
|Adding property in the class creation - small class|326,374|163188|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:28:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3825528.4850915875,"samples":1912765},{"name":"Adding property in the object creation - small object","opsSec":3960658.566239327,"samples":1980330},{"name":"Adding property after the function creation - small class","opsSec":287660.65432347654,"samples":143831},{"name":"Adding property in the function creation - small class","opsSec":293242.53085484495,"samples":146622},{"name":"Adding property after the class creation - small class","opsSec":314304.58500063606,"samples":157153},{"name":"Adding property in the class creation - small class","opsSec":326374.8198286521,"samples":163188}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,266,537|8133269|
|Getter|13,853,160|6926581|
|Method|16,008,203|8004102|
|DefineProperty (getter)|16,261,079|8130540|
|DefineProperty (getter & enumerable=false)|14,109,035|7054518|
|DefineProperty (getter & configurable=false)|16,297,382|8148692|
|DefineProperty (getter & enumerable=false & configurable=false)|14,042,582|7021292|
|DefineProperty (writable)|16,228,616|8114309|
|DefineProperty (writable & enumerable=false)|16,286,009|8143005|
|DefineProperty (writable & enumerable=false & configurable=false)|16,278,742|8139372|
|DefineProperties (getter)|13,596,955|6798478|
|DefineProperties (getter & enumerable=false)|13,637,369|6818685|
|DefineProperties (getter & enumerable=false & configurable=false)|13,640,816|6820409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:41:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16266537.316842366,"samples":8133269},{"name":"Getter","opsSec":13853160.448494794,"samples":6926581},{"name":"Method","opsSec":16008203.071585521,"samples":8004102},{"name":"DefineProperty (getter)","opsSec":16261079.90247419,"samples":8130540},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14109035.97178664,"samples":7054518},{"name":"DefineProperty (getter & configurable=false)","opsSec":16297382.109421926,"samples":8148692},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14042582.399194617,"samples":7021292},{"name":"DefineProperty (writable)","opsSec":16228616.506920254,"samples":8114309},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16286009.088555045,"samples":8143005},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16278742.371978343,"samples":8139372},{"name":"DefineProperties (getter)","opsSec":13596955.102441777,"samples":6798478},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13637369.236490034,"samples":6818685},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13640816.963372394,"samples":6820409}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,951,061|7975531|
|Setter|6,807,661|3403831|
|Method|15,960,035|7980018|
|DefineProperty (setter)|16,022,538|8011270|
|DefineProperty (setter & enumerable=false)|6,546,656|3273329|
|DefineProperty (setter & configurable=false)|6,636,062|3318032|
|DefineProperty (setter & enumerable=false & configurable=false)|6,621,431|3310716|
|DefineProperty (writable)|15,656,616|7828309|
|DefineProperty (writable & enumerable=false)|15,615,022|7807512|
|DefineProperty (writable & enumerable=false & configurable=false)|15,554,009|7777005|
|DefineProperties (setter)|15,708,212|7854107|
|DefineProperties (setter & enumerable=false)|6,747,730|3373866|
|DefineProperties (setter & enumerable=false & configurable=false)|6,749,445|3374723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:51:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15951061.74479446,"samples":7975531},{"name":"Setter","opsSec":6807661.727690739,"samples":3403831},{"name":"Method","opsSec":15960035.96805611,"samples":7980018},{"name":"DefineProperty (setter)","opsSec":16022538.013177624,"samples":8011270},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6546656.363353027,"samples":3273329},{"name":"DefineProperty (setter & configurable=false)","opsSec":6636062.832051194,"samples":3318032},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6621431.417330314,"samples":3310716},{"name":"DefineProperty (writable)","opsSec":15656616.4343548,"samples":7828309},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15615022.469683426,"samples":7807512},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15554009.066723151,"samples":7777005},{"name":"DefineProperties (setter)","opsSec":15708212.554805325,"samples":7854107},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6747730.852892044,"samples":3373866},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6749445.01456606,"samples":3374723}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,892,327|1446164|
|Using replaceAll()|2,689,353|1344677|
|Using replaceAll(//g)|2,688,534|1344268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:57:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2892327.40996558,"samples":1446164},{"name":"Using replaceAll()","opsSec":2689353.612733224,"samples":1344677},{"name":"Using replaceAll(//g)","opsSec":2688534.4406511495,"samples":1344268}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,577,542|5288772|
|{ ...object, __proto__: null }|2,280,674|1140338|
|{ ...object, newProp: true }|10,367,929|5183965|
|structuredClone|313,860|156931|
|JSON.parse + JSON.stringify|290,907|145454|
|loop + object.keys starting with {}|1,470,018|735010|
|loop + object.keys starting with { __proto__: null }|887,655|443828|
|loop + object.keys starting with { randomProp: true }|647,719|323860|
|object.keys + reduce(FN, {})|1,493,199|746600|
|object.keys + reduce(FN, { __proto__: null })|884,200|442101|
|object.keys + reduce(FN, { newProp: true })|700,927|350464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:03:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10577542.51915319,"samples":5288772},{"name":"{ ...object, __proto__: null }","opsSec":2280674.5722979726,"samples":1140338},{"name":"{ ...object, newProp: true }","opsSec":10367929.460868843,"samples":5183965},{"name":"structuredClone","opsSec":313860.4871924426,"samples":156931},{"name":"JSON.parse + JSON.stringify","opsSec":290907.8626914561,"samples":145454},{"name":"loop + object.keys starting with {}","opsSec":1470018.6505245664,"samples":735010},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":887655.2277400295,"samples":443828},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":647719.2551220884,"samples":323860},{"name":"object.keys + reduce(FN, {})","opsSec":1493199.2862519987,"samples":746600},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":884200.1396440713,"samples":442101},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":700927.2640269855,"samples":350464}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|330,412|165207|
|Sort using first char|1,316,708|658355|
|Sort using localeCompare|1,273,896|636949|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:07:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":330412.61358867533,"samples":165207},{"name":"Sort using first char","opsSec":1316708.069706001,"samples":658355},{"name":"Sort using localeCompare","opsSec":1273896.6496696405,"samples":636949}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,267|1135|
|{...smallObject} - Total keys: 2|12,345,071|6172536|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,534|1268|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,751|3376|
|{ ...bigObject, ...anotherBigObject }|1,339|670|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,084,268|3542135|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,125,334|5562668|
|{ ...smallObject, ...anotherSmallObject }|8,443,796|4221928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:13:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2267.4258367959983,"samples":1135},{"name":"{...smallObject} - Total keys: 2","opsSec":12345071.580256242,"samples":6172536},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2534.382840721829,"samples":1268},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6751.323247358276,"samples":3376},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1339.8651934831823,"samples":670},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7084268.044740764,"samples":3542135},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11125334.954203427,"samples":5562668},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8443796.150365558,"samples":4221928}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,301|1152|
|streams.web.Readable reading 1e3 * "some data"|2,224|1113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:18:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2301.158506464639,"samples":1152},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2224.9392957897694,"samples":1113}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,651|3326|
|streams.web.WritableStream writing 1e3 * "some data"|2,916|1468|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:23:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6651.824019343737,"samples":3326},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2916.7333081283664,"samples":1468}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,916,553|7958277|
|Using backtick (`)|16,140,587|8070294|
|Using array.join|6,294,293|3147147|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:27:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15916553.204189496,"samples":7958277},{"name":"Using backtick (`)","opsSec":16140587.70942452,"samples":8070294},{"name":"Using array.join","opsSec":6294293.937049941,"samples":3147147}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,596,220|7798111|
|(short string) (true) String#slice and strict comparison|15,932,357|7966179|
|(long string) (true) String#endsWith|14,209,889|7104945|
|(long string) (true) String#slice and strict comparison|16,052,976|8026538|
|(short string) (false) String#endsWith|15,977,959|7988980|
|(short string) (false) String#slice and strict comparison|16,106,407|8053204|
|(long string) (false) String#endsWith|15,515,646|7757824|
|(long string) (false) String#slice and strict comparison|16,034,363|8017182|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:40:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15596220.596372595,"samples":7798111},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15932357.522078551,"samples":7966179},{"name":"(long string) (true) String#endsWith","opsSec":14209889.147407345,"samples":7104945},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16052976.182595989,"samples":8026538},{"name":"(short string) (false) String#endsWith","opsSec":15977959.520614669,"samples":7988980},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16106407.259339394,"samples":8053204},{"name":"(long string) (false) String#endsWith","opsSec":15515646.262191037,"samples":7757824},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16034363.903640954,"samples":8017182}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,741,195|7870598|
|Using indexof|14,868,223|7434112|
|Using RegExp.test|8,323,630|4161816|
|Using RegExp.text with cached regex pattern|8,437,602|4218802|
|Using new RegExp.test|3,822,171|1911086|
|Using new RegExp.test with cached regex pattern|3,917,820|1958911|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:41:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using includes","opsSec":15741195.590714753,"samples":7870598},{"name":"Using indexof","opsSec":14868223.76211951,"samples":7434112},{"name":"Using RegExp.test","opsSec":8323630.0023300005,"samples":4161816},{"name":"Using RegExp.text with cached regex pattern","opsSec":8437602.58247937,"samples":4218802},{"name":"Using new RegExp.test","opsSec":3822171.5031106533,"samples":1911086},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3917820.9265125836,"samples":1958911}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,756,879|7878440|
|(short string) (true) String#slice and strict comparison|16,012,794|8006398|
|(long string) (true) String#startsWith|14,228,279|7114140|
|(long string) (true) String#slice and strict comparison|16,117,461|8058731|
|(short string) (false) String#startsWith|15,915,089|7957545|
|(short string) (false) String#slice and strict comparison|16,212,093|8106047|
|(long string) (false) String#startsWith|15,567,757|7783879|
|(long string) (false) String#slice and strict comparison|16,194,300|8097151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:43:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15756879.62181831,"samples":7878440},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16012794.686940487,"samples":8006398},{"name":"(long string) (true) String#startsWith","opsSec":14228279.772364372,"samples":7114140},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16117461.065208636,"samples":8058731},{"name":"(short string) (false) String#startsWith","opsSec":15915089.522626357,"samples":7957545},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16212093.902721388,"samples":8106047},{"name":"(long string) (false) String#startsWith","opsSec":15567757.533011857,"samples":7783879},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16194300.47780476,"samples":8097151}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,765,610|7882806|
|Using this|15,865,418|7932710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:44:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using super","opsSec":15765610.644152595,"samples":7882806},{"name":"Using this","opsSec":15865418.476935703,"samples":7932710}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,814,384|3407193|
|Date.now()|9,566,258|4783130|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:45:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6814384.364544781,"samples":3407193},{"name":"Date.now()","opsSec":9566258.775515547,"samples":4783130}]}-->
