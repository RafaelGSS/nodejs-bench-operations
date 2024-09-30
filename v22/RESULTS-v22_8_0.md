## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|97,494,014|48751961|
|Using dot notation|67,585,906|33801913|
|Using define property (writable)|4,785,017|2392885|
|Using define property initialized (writable)|6,618,185|3309425|
|Using define property (getter)|2,370,855|1185488|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 20:59:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":97494014.07332578,"samples":48751961},{"name":"Using dot notation","opsSec":67585906.13767485,"samples":33801913},{"name":"Using define property (writable)","opsSec":4785017.9578676345,"samples":2392885},{"name":"Using define property initialized (writable)","opsSec":6618185.957693748,"samples":3309425},{"name":"Using define property (getter)","opsSec":2370855.3945860774,"samples":1185488}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.073ms
new Array(length)|100|0.007ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.292ms
new Array(length)|10,000|0.197ms
array.push|1,000,000|28.441ms
new Array(length)|1,000,000|6.222ms
array.push|100,000,000|1,876.111ms
new Array(length)|100,000,000|4,011.753ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.021ms
array.push|10,000|160.121ms
new Array(length)|10,000|0.051ms
array.push|1,000,000|18.348ms
new Array(length)|1,000,000|6.98ms
array.push|100,000,000|2,037.762ms
new Array(length)|100,000,000|4,660.058ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|329|166|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:03:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Array","opsSec":329.99547023567294,"samples":166},{"name":"Array.from","opsSec":24.394313084394035,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,912|2041|
|new Blob (1024)|569|290|
|text (128)|4,141|2072|
|text (1024)|517|259|
|arrayBuffer (128)|4,152|2077|
|arrayBuffer (1024)|521|261|
|slice (0, 64)|235,542|117772|
|slice (0, 512)|39,017|19510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:16:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":3912.7308198701585,"samples":2041},{"name":"new Blob (1024)","opsSec":569.5762108270412,"samples":290},{"name":"text (128)","opsSec":4141.745382916821,"samples":2072},{"name":"text (1024)","opsSec":517.8526605610128,"samples":259},{"name":"arrayBuffer (128)","opsSec":4152.066349484893,"samples":2077},{"name":"arrayBuffer (1024)","opsSec":521.4066965340799,"samples":261},{"name":"slice (0, 64)","opsSec":235542.96737964044,"samples":117772},{"name":"slice (0, 512)","opsSec":39017.93774593493,"samples":19510}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|426,330|213166|
|[True conditional] Using constructor name|331,239|165629|
|[True conditional] Check if property is valid then instanceof |340,421|170214|
|[False conditional] Using instanceof only|95,736,213|47868142|
|[False conditional] Using constructor name|96,593,076|48297318|
|[False conditional] Check if property is valid then instanceof |96,614,721|48307392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":426330.0405871335,"samples":213166},{"name":"[True conditional] Using constructor name","opsSec":331239.8679296296,"samples":165629},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":340421.4577804244,"samples":170214},{"name":"[False conditional] Using instanceof only","opsSec":95736213.34667455,"samples":47868142},{"name":"[False conditional] Using constructor name","opsSec":96593076.60137135,"samples":48297318},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96614721.39366053,"samples":48307392}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,809|3405|
|crypto.verify('RSA-SHA256')|6,903|3452|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:07:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6809.110757371531,"samples":3405},{"name":"crypto.verify('RSA-SHA256')","opsSec":6903.754240156559,"samples":3452}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,419,461|709845|
|fromUnixToISOString(new Date())|1,987,264|993651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:08:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1419461.0664802757,"samples":709845},{"name":"fromUnixToISOString(new Date())","opsSec":1987264.9017388143,"samples":993651}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,848|9426|
|Intl.DateTimeFormat().format(new Date())|18,203|9123|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,764|8883|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,606|9305|
|Reusing Intl.DateTimeFormat()|519,535|259770|
|Date.toLocaleDateString()|963,224|481666|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,767|11384|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:10:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18848.865509061307,"samples":9426},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18203.22478816703,"samples":9123},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17764.013592472063,"samples":8883},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18606.706724549993,"samples":9305},{"name":"Reusing Intl.DateTimeFormat()","opsSec":519535.8852757886,"samples":259770},{"name":"Date.toLocaleDateString()","opsSec":963224.0091034434,"samples":481666},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22767.097193527887,"samples":11384}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,031,812|516156|
|Using brackets {}|1,056,715|528919|
|Using '' + |1,060,341|530172|
|Using date.toString()|1,152,867|576443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:12:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":1031812.150985201,"samples":516156},{"name":"Using brackets {}","opsSec":1056715.2865035625,"samples":528919},{"name":"Using '' + ","opsSec":1060341.6863344405,"samples":530172},{"name":"Using date.toString()","opsSec":1152867.9553107633,"samples":576443}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,923,544|1961908|
|Using delete property (proto: null)|16,644,493|8339015|
|Using delete property (cached proto: null)|3,908,954|1954808|
|Using undefined assignment|68,852,768|34426412|
|Using undefined assignment (proto: null)|17,719,213|8860183|
|Using undefined property (cached proto: null)|69,436,591|34718333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:13:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3923544.4044092377,"samples":1961908},{"name":"Using delete property (proto: null)","opsSec":16644493.542584838,"samples":8339015},{"name":"Using delete property (cached proto: null)","opsSec":3908954.4641822996,"samples":1954808},{"name":"Using undefined assignment","opsSec":68852768.22925773,"samples":34426412},{"name":"Using undefined assignment (proto: null)","opsSec":17719213.93214856,"samples":8860183},{"name":"Using undefined property (cached proto: null)","opsSec":69436591.98059295,"samples":34718333}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|401,490|200797|
|NodeError|328,383|164192|
|NodeError Range|323,436|161739|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:15:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Error","opsSec":401490.62901072984,"samples":200797},{"name":"NodeError","opsSec":328383.70576819964,"samples":164192},{"name":"NodeError Range","opsSec":323436.0057158898,"samples":161739}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,683,061|841547|
|Function returning explicitly undefined|1,585,153|792670|
|Function returning implicitly undefined|1,623,763|811882|
|Function returning string|1,606,354|805771|
|Function returning integer|1,628,658|814330|
|Function returning float|1,618,155|809078|
|Function returning functions|1,634,637|817319|
|Function returning arrow functions|1,605,346|802727|
|Function returning empty object|1,639,157|819579|
|Function returning empty array|1,614,479|807328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:17:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1683061.3519758943,"samples":841547},{"name":"Function returning explicitly undefined","opsSec":1585153.6525069186,"samples":792670},{"name":"Function returning implicitly undefined","opsSec":1623763.480395686,"samples":811882},{"name":"Function returning string","opsSec":1606354.0002505947,"samples":805771},{"name":"Function returning integer","opsSec":1628658.990231426,"samples":814330},{"name":"Function returning float","opsSec":1618155.9676368805,"samples":809078},{"name":"Function returning functions","opsSec":1634637.156527227,"samples":817319},{"name":"Function returning arrow functions","opsSec":1605346.9907802886,"samples":802727},{"name":"Function returning empty object","opsSec":1639157.2197611632,"samples":819579},{"name":"Function returning empty array","opsSec":1614479.2758695048,"samples":807328}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|85,173,205|42653516|
|using Array.includes (first item)|82,206,304|41157646|
|Using raw comparison|95,848,945|47931186|
|Using raw comparison (first item)|97,230,979|48627385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:18:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":85173205.98494592,"samples":42653516},{"name":"using Array.includes (first item)","opsSec":82206304.0330013,"samples":41157646},{"name":"Using raw comparison","opsSec":95848945.4797172,"samples":47931186},{"name":"Using raw comparison (first item)","opsSec":97230979.1351013,"samples":48627385}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,515,994|23258576|
|Using Object.getOwnPropertyNames()|40,184,996|20094966|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:19:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using Object.keys()","opsSec":46515994.12387426,"samples":23258576},{"name":"Using Object.getOwnPropertyNames()","opsSec":40184996.47873248,"samples":20094966}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|123,314,828|61670542|
|Length = 10_000 - Array.at|98,871,669|49436574|
|Length = 1_000_000 - Array.at|97,082,047|48541038|
|Length = 100 - Array[length - 1]|96,867,069|48444675|
|Length = 10_000 - Array[length - 1]|97,221,546|48610784|
|Length = 1_000_000 - Array[length - 1]|95,320,455|47660593|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:21:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":123314828.30001768,"samples":61670542},{"name":"Length = 10_000 - Array.at","opsSec":98871669.27531432,"samples":49436574},{"name":"Length = 1_000_000 - Array.at","opsSec":97082047.45787805,"samples":48541038},{"name":"Length = 100 - Array[length - 1]","opsSec":96867069.99269927,"samples":48444675},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97221546.02793059,"samples":48610784},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":95320455.08275042,"samples":47660593}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|129,334,602|64669041|
|~ (small)|90,908,039|45454970|
|Math.floor (long)|95,267,474|47637884|
|~ (long)|98,049,894|49025037|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:22:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":129334602.12319528,"samples":64669041},{"name":"~ (small)","opsSec":90908039.29471442,"samples":45454970},{"name":"Math.floor (long)","opsSec":95267474.20423073,"samples":47637884},{"name":"~ (long)","opsSec":98049894.37259352,"samples":49025037}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,410,218|21206263|
|Object.create({})|1,937,662|986351|
|Cached Empty.prototype|96,865,999|48433783|
|Empty.prototype|2,511,324|1258265|
|Empty class|1,434,015|727098|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:24:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":42410218.54482941,"samples":21206263},{"name":"Object.create({})","opsSec":1937662.2079559406,"samples":986351},{"name":"Cached Empty.prototype","opsSec":96865999.09559864,"samples":48433783},{"name":"Empty.prototype","opsSec":2511324.772122173,"samples":1258265},{"name":"Empty class","opsSec":1434015.843589436,"samples":727098}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|140,916,238|70464688|
|Using optional chain (obj.field?.field2) (undefined)|98,749,808|49423384|
|Using and operator (obj.field && obj.field.field2) (Valid)|95,888,461|47948051|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,317,396|48659439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:25:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":140916238.94270834,"samples":70464688},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98749808.92011483,"samples":49423384},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":95888461.0320942,"samples":47948051},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97317396.82922025,"samples":48659439}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|133,238,497|66619305|
|Using parseInt(x, 10) - big number (10 len)|99,757,567|49878786|
|Using + - small number (2 len)|84,995,945|42499262|
|Using + - big number (10 len)|97,465,305|48734713|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:27:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":133238497.54670806,"samples":66619305},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99757567.4111519,"samples":49878786},{"name":"Using + - small number (2 len)","opsSec":84995945.5629954,"samples":42499262},{"name":"Using + - big number (10 len)","opsSec":97465305.36181991,"samples":48734713}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,011,355|505755|
|Using ? operator to avoid rejection|1,089,811|545596|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:29:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using if to check function existence","opsSec":1011355.3941009038,"samples":505755},{"name":"Using ? operator to avoid rejection","opsSec":1089811.002395874,"samples":545596}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|129,542,844|64772134|
|Raw usage underscore usage|95,019,508|47509758|
|Manipulating private properties using #|90,191,827|45095924|
|Manipulating private properties using underscore(_)|89,016,931|44514758|
|Manipulating private properties using Symbol|89,795,460|44901793|
|Manipulating private properties using PrivateSymbol|34,560,322|17280166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:30:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Raw usage private field","opsSec":129542844.32414088,"samples":64772134},{"name":"Raw usage underscore usage","opsSec":95019508.39843933,"samples":47509758},{"name":"Manipulating private properties using #","opsSec":90191827.79703057,"samples":45095924},{"name":"Manipulating private properties using underscore(_)","opsSec":89016931.32035151,"samples":44514758},{"name":"Manipulating private properties using Symbol","opsSec":89795460.22921294,"samples":44901793},{"name":"Manipulating private properties using PrivateSymbol","opsSec":34560322.461351,"samples":17280166}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,943,167|3982580|
|Adding property in the object creation - small object|7,691,465|3845733|
|Adding property after the function creation - small class|248,435|125903|
|Adding property in the function creation - small class|264,819|132898|
|Adding property after the class creation - small class|256,010|130181|
|Adding property in the class creation - small class|260,452|131399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:31:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7943167.196960072,"samples":3982580},{"name":"Adding property in the object creation - small object","opsSec":7691465.215470548,"samples":3845733},{"name":"Adding property after the function creation - small class","opsSec":248435.80140508155,"samples":125903},{"name":"Adding property in the function creation - small class","opsSec":264819.633843785,"samples":132898},{"name":"Adding property after the class creation - small class","opsSec":256010.44052035734,"samples":130181},{"name":"Adding property in the class creation - small class","opsSec":260452.81410228013,"samples":131399}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|134,425,528|67221536|
|Getter|47,928,637|23964329|
|Method|87,918,353|43965558|
|DefineProperty (getter)|87,629,030|43814538|
|DefineProperty (getter & enumerable=false)|48,044,683|24032101|
|DefineProperty (getter & configurable=false)|81,236,585|40623212|
|DefineProperty (getter & enumerable=false & configurable=false)|49,330,126|24667697|
|DefineProperty (writable)|88,862,791|44567654|
|DefineProperty (writable & enumerable=false)|88,942,500|44473792|
|DefineProperty (writable & enumerable=false & configurable=false)|89,040,173|44520089|
|DefineProperties (getter)|47,695,762|23847910|
|DefineProperties (getter & enumerable=false)|47,776,971|23889887|
|DefineProperties (getter & enumerable=false & configurable=false)|49,181,929|24592116|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:33:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":134425528.66195643,"samples":67221536},{"name":"Getter","opsSec":47928637.965829335,"samples":23964329},{"name":"Method","opsSec":87918353.42014411,"samples":43965558},{"name":"DefineProperty (getter)","opsSec":87629030.9586781,"samples":43814538},{"name":"DefineProperty (getter & enumerable=false)","opsSec":48044683.84718708,"samples":24032101},{"name":"DefineProperty (getter & configurable=false)","opsSec":81236585.9244982,"samples":40623212},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":49330126.52908922,"samples":24667697},{"name":"DefineProperty (writable)","opsSec":88862791.94277234,"samples":44567654},{"name":"DefineProperty (writable & enumerable=false)","opsSec":88942500.22457217,"samples":44473792},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":89040173.36991097,"samples":44520089},{"name":"DefineProperties (getter)","opsSec":47695762.09734481,"samples":23847910},{"name":"DefineProperties (getter & enumerable=false)","opsSec":47776971.49840585,"samples":23889887},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":49181929.59714784,"samples":24592116}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|127,759,288|63881334|
|Setter|11,104,442|5552460|
|Method|90,029,704|45014869|
|DefineProperty (setter)|93,258,399|46629233|
|DefineProperty (setter & enumerable=false)|11,589,276|5794644|
|DefineProperty (setter & configurable=false)|11,367,055|5683531|
|DefineProperty (setter & enumerable=false & configurable=false)|11,484,775|5742393|
|DefineProperty (writable)|92,405,199|46202635|
|DefineProperty (writable & enumerable=false)|85,328,641|42665152|
|DefineProperty (writable & enumerable=false & configurable=false)|91,989,462|45996583|
|DefineProperties (setter)|91,712,668|45858734|
|DefineProperties (setter & enumerable=false)|11,251,930|5626229|
|DefineProperties (setter & enumerable=false & configurable=false)|10,903,871|5451992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:35:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":127759288.51130031,"samples":63881334},{"name":"Setter","opsSec":11104442.797675211,"samples":5552460},{"name":"Method","opsSec":90029704.68900926,"samples":45014869},{"name":"DefineProperty (setter)","opsSec":93258399.97305283,"samples":46629233},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11589276.086224183,"samples":5794644},{"name":"DefineProperty (setter & configurable=false)","opsSec":11367055.907258034,"samples":5683531},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11484775.319158955,"samples":5742393},{"name":"DefineProperty (writable)","opsSec":92405199.21761739,"samples":46202635},{"name":"DefineProperty (writable & enumerable=false)","opsSec":85328641.45674986,"samples":42665152},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":91989462.87218262,"samples":45996583},{"name":"DefineProperties (setter)","opsSec":91712668.85946393,"samples":45858734},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11251930.14945283,"samples":5626229},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10903871.27577875,"samples":5451992}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,302,978|1651491|
|Using replaceAll()|3,116,922|1558601|
|Using replaceAll(//g)|2,956,318|1478467|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:36:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3302978.280846456,"samples":1651491},{"name":"Using replaceAll()","opsSec":3116922.5865916475,"samples":1558601},{"name":"Using replaceAll(//g)","opsSec":2956318.872819495,"samples":1478467}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,921,008|10960669|
|{ ...object, __proto__: null }|2,526,390|1263196|
|{ ...object, newProp: true }|19,435,632|9732147|
|structuredClone|303,315|151730|
|JSON.parse + JSON.stringify|299,624|149824|
|loop + object.keys starting with {}|1,616,158|808080|
|loop + object.keys starting with { __proto__: null }|872,510|436306|
|loop + object.keys starting with { randomProp: true }|652,358|326215|
|object.keys + reduce(FN, {})|1,705,071|852623|
|object.keys + reduce(FN, { __proto__: null })|888,111|444121|
|object.keys + reduce(FN, { newProp: true })|672,567|336331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:38:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":21921008.43955912,"samples":10960669},{"name":"{ ...object, __proto__: null }","opsSec":2526390.084996315,"samples":1263196},{"name":"{ ...object, newProp: true }","opsSec":19435632.816483248,"samples":9732147},{"name":"structuredClone","opsSec":303315.6508684891,"samples":151730},{"name":"JSON.parse + JSON.stringify","opsSec":299624.14931846596,"samples":149824},{"name":"loop + object.keys starting with {}","opsSec":1616158.7232346085,"samples":808080},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":872510.0489458008,"samples":436306},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652358.0618670856,"samples":326215},{"name":"object.keys + reduce(FN, {})","opsSec":1705071.2097401472,"samples":852623},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":888111.1847749274,"samples":444121},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":672567.3469070004,"samples":336331}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|294,367|147372|
|Sort using first char|1,314,868|657435|
|Sort using localeCompare|1,200,593|600356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:40:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Sort using default","opsSec":294367.45633581857,"samples":147372},{"name":"Sort using first char","opsSec":1314868.9033993345,"samples":657435},{"name":"Sort using localeCompare","opsSec":1200593.3861758192,"samples":600356}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,854|929|
|{...smallObject} - Total keys: 2|53,367,080|26683548|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,066|534|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,434|3218|
|{ ...bigObject, ...anotherBigObject }|1,130|566|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,414,408|6207317|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,872,642|13936329|
|{ ...smallObject, ...anotherSmallObject }|20,538,869|10275837|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:41:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1854.9984714932402,"samples":929},{"name":"{...smallObject} - Total keys: 2","opsSec":53367080.3100784,"samples":26683548},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1066.9522720739642,"samples":534},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6434.100820724344,"samples":3218},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1130.223762938641,"samples":566},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12414408.00811662,"samples":6207317},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27872642.781537037,"samples":13936329},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20538869.781034324,"samples":10275837}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,055|1028|
|streams.web.Readable reading 1e3 * "some data"|1,821|911|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:43:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2055.72632526577,"samples":1028},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1821.7016453479284,"samples":911}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,168|3585|
|streams.web.WritableStream writing 1e3 * "some data"|2,035|1018|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:21:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":7168.318599189264,"samples":3585},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2035.9815580789661,"samples":1018}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,777,799|7388900|
|Using backtick (`)|14,677,111|7338556|
|Using array.join|5,597,731|2798866|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:30:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":14777799.615788747,"samples":7388900},{"name":"Using backtick (`)","opsSec":14677111.99996161,"samples":7338556},{"name":"Using array.join","opsSec":5597731.3841939075,"samples":2798866}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,489,385|7244693|
|(short string) (true) String#slice and strict comparison|13,341,251|6670626|
|(long string) (true) String#endsWith|14,302,476|7151239|
|(long string) (true) String#slice and strict comparison|13,273,101|6636551|
|(short string) (false) String#endsWith|14,936,108|7468055|
|(short string) (false) String#slice and strict comparison|13,195,745|6597873|
|(long string) (false) String#endsWith|14,096,500|7048251|
|(long string) (false) String#slice and strict comparison|13,096,026|6548014|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:48:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14489385.188688615,"samples":7244693},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13341251.439616773,"samples":6670626},{"name":"(long string) (true) String#endsWith","opsSec":14302476.91310463,"samples":7151239},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13273101.362788359,"samples":6636551},{"name":"(short string) (false) String#endsWith","opsSec":14936108.655737378,"samples":7468055},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13195745.31381141,"samples":6597873},{"name":"(long string) (false) String#endsWith","opsSec":14096500.336442959,"samples":7048251},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13096026.690512376,"samples":6548014}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,086,306|4043154|
|Using indexof|8,079,033|4039517|
|Using RegExp.test|7,494,932|3747467|
|Using RegExp.text with cached regex pattern|7,562,165|3781083|
|Using new RegExp.test|3,422,465|1711233|
|Using new RegExp.test with cached regex pattern|3,710,162|1855082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:58:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8086306.382736088,"samples":4043154},{"name":"Using indexof","opsSec":8079033.903072282,"samples":4039517},{"name":"Using RegExp.test","opsSec":7494932.545978994,"samples":3747467},{"name":"Using RegExp.text with cached regex pattern","opsSec":7562165.274014556,"samples":3781083},{"name":"Using new RegExp.test","opsSec":3422465.1306736413,"samples":1711233},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3710162.374956563,"samples":1855082}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,777,840|7388921|
|(short string) (true) String#slice and strict comparison|13,424,617|6712309|
|(long string) (true) String#startsWith|13,801,056|6900529|
|(long string) (true) String#slice and strict comparison|12,674,946|6337474|
|(short string) (false) String#startsWith|14,252,659|7126330|
|(short string) (false) String#slice and strict comparison|12,960,772|6480387|
|(long string) (false) String#startsWith|13,626,073|6813037|
|(long string) (false) String#slice and strict comparison|12,712,389|6356195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:14:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14777840.788228903,"samples":7388921},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13424617.758412084,"samples":6712309},{"name":"(long string) (true) String#startsWith","opsSec":13801056.895880733,"samples":6900529},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12674946.149559973,"samples":6337474},{"name":"(short string) (false) String#startsWith","opsSec":14252659.886055423,"samples":7126330},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12960772.781422146,"samples":6480387},{"name":"(long string) (false) String#startsWith","opsSec":13626073.427414631,"samples":6813037},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12712389.618584894,"samples":6356195}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,726,529|7363265|
|Using this|15,127,995|7563998|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:26:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":14726529.823258411,"samples":7363265},{"name":"Using this","opsSec":15127995.546193771,"samples":7563998}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,053,726|3026864|
|Date.now()|8,814,235|4407118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:32:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6053726.631853123,"samples":3026864},{"name":"Date.now()","opsSec":8814235.559294535,"samples":4407118}]}-->
