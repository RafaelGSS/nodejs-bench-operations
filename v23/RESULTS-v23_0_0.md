## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|86,430,303|43228817|
|Using dot notation|61,654,473|30835524|
|Using define property (writable)|4,762,459|2381233|
|Using define property initialized (writable)|7,058,503|3532568|
|Using define property (getter)|2,386,388|1196782|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:01:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":43228817,"opsSec":86430303.35519423},{"name":"Using dot notation","samples":30835524,"opsSec":61654473.55118418},{"name":"Using define property (writable)","samples":2381233,"opsSec":4762459.637353925},{"name":"Using define property initialized (writable)","samples":3532568,"opsSec":7058503.92852781},{"name":"Using define property (getter)","samples":1196782,"opsSec":2386388.1261319453}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.106ms
new Array(length)|100|0.01ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.323ms
new Array(length)|10,000|0.141ms
array.push|1,000,000|33.257ms
new Array(length)|1,000,000|7.766ms
array.push|100,000,000|2,011.37ms
new Array(length)|100,000,000|4,325.982ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|208.477ms
new Array(length)|10,000|0.044ms
array.push|1,000,000|20.782ms
new Array(length)|1,000,000|8.056ms
array.push|100,000,000|2,120.598ms
new Array(length)|100,000,000|4,982.797ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|255|129|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:08:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":129,"opsSec":255.40349906951457},{"name":"Array.from","samples":12,"opsSec":23.21974208416063}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,443|2233|
|new Blob (1024)|584|298|
|text (128)|4,165|2085|
|text (1024)|521|263|
|arrayBuffer (128)|4,167|2088|
|arrayBuffer (1024)|528|265|
|slice (0, 64)|149,377|86862|
|slice (0, 512)|31,791|15896|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2233,"opsSec":4443.500159203864},{"name":"new Blob (1024)","samples":298,"opsSec":584.2751724939122},{"name":"text (128)","samples":2085,"opsSec":4165.679615375069},{"name":"text (1024)","samples":263,"opsSec":521.0890204964264},{"name":"arrayBuffer (128)","samples":2088,"opsSec":4167.241333836955},{"name":"arrayBuffer (1024)","samples":265,"opsSec":528.2097155697919},{"name":"slice (0, 64)","samples":86862,"opsSec":149377.82413095722},{"name":"slice (0, 512)","samples":15896,"opsSec":31791.27172554731}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|453,616|226809|
|[True conditional] Using constructor name|351,155|175578|
|[True conditional] Check if property is valid then instanceof |351,689|175863|
|[False conditional] Using instanceof only|92,178,120|46093674|
|[False conditional] Using constructor name|92,983,061|46494041|
|[False conditional] Check if property is valid then instanceof |87,744,020|43872332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:12:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":453616.20549429103,"samples":226809},{"name":"[True conditional] Using constructor name","opsSec":351155.17970150016,"samples":175578},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":351689.80619528523,"samples":175863},{"name":"[False conditional] Using instanceof only","opsSec":92178120.23273973,"samples":46093674},{"name":"[False conditional] Using constructor name","opsSec":92983061.47257885,"samples":46494041},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":87744020.13438025,"samples":43872332}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.10 ms|1|
|Gzip|134.94 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:22:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132099971},{"name":"Gzip","samples":1,"totalTime":0.134941521}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,828|3415|
|crypto.verify('RSA-SHA256')|6,761|3381|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:27:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3415,"opsSec":6828.495791633036},{"name":"crypto.verify('RSA-SHA256')","samples":3381,"opsSec":6761.570450952391}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,315,157|657638|
|fromUnixToISOString(new Date())|2,186,453|1093227|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:30:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":657638,"opsSec":1315157.2833823438},{"name":"fromUnixToISOString(new Date())","samples":1093227,"opsSec":2186453.169147796}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,606|10304|
|Intl.DateTimeFormat().format(new Date())|20,415|10208|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,424|10213|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,343|9672|
|Reusing Intl.DateTimeFormat()|548,880|274442|
|Date.toLocaleDateString()|1,116,519|558262|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,888|12445|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:36:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10304,"opsSec":20606.018731298984},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10208,"opsSec":20415.707851220646},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10213,"opsSec":20424.929733681955},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9672,"opsSec":19343.190564847624},{"name":"Reusing Intl.DateTimeFormat()","samples":274442,"opsSec":548880.3279906057},{"name":"Date.toLocaleDateString()","samples":558262,"opsSec":1116519.6031458026},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12445,"opsSec":24888.766164306173}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,025,228|512872|
|Using brackets {}|1,030,458|515314|
|Using '' + |1,015,454|507760|
|Using date.toString()|1,135,884|568047|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:37:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":512872,"opsSec":1025228.7589844272},{"name":"Using brackets {}","samples":515314,"opsSec":1030458.1021899434},{"name":"Using '' + ","samples":507760,"opsSec":1015454.0868752209},{"name":"Using date.toString()","samples":568047,"opsSec":1135884.1340473935}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,966,574|1983298|
|Using delete property (proto: null)|17,760,419|8880799|
|Using delete property (cached proto: null)|3,985,462|1992733|
|Using undefined assignment|72,254,286|36127188|
|Using undefined assignment (proto: null)|19,117,459|9560221|
|Using undefined property (cached proto: null)|73,056,128|36528078|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:44:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1983298,"opsSec":3966574.9771526214},{"name":"Using delete property (proto: null)","samples":8880799,"opsSec":17760419.986863114},{"name":"Using delete property (cached proto: null)","samples":1992733,"opsSec":3985462.5007639243},{"name":"Using undefined assignment","samples":36127188,"opsSec":72254286.54919325},{"name":"Using undefined assignment (proto: null)","samples":9560221,"opsSec":19117459.255771995},{"name":"Using undefined property (cached proto: null)","samples":36528078,"opsSec":73056128.67700787}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|343,061|171535|
|NodeError|309,311|154656|
|NodeError Range|302,266|151134|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:46:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":171535,"opsSec":343061.7658314965},{"name":"NodeError","samples":154656,"opsSec":309311.6603757969},{"name":"NodeError Range","samples":151134,"opsSec":302266.8392953371}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,808,205|904104|
|Function returning explicitly undefined|1,705,170|853094|
|Function returning implicitly undefined|1,790,056|895029|
|Function returning string|1,735,811|867941|
|Function returning integer|1,697,248|848625|
|Function returning float|1,777,149|888741|
|Function returning functions|1,773,976|888840|
|Function returning arrow functions|1,813,573|906793|
|Function returning empty object|1,835,470|917736|
|Function returning empty array|1,798,577|899810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:53:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1808205.4902107795,"samples":904104},{"name":"Function returning explicitly undefined","opsSec":1705170.9644196397,"samples":853094},{"name":"Function returning implicitly undefined","opsSec":1790056.9152255096,"samples":895029},{"name":"Function returning string","opsSec":1735811.88014329,"samples":867941},{"name":"Function returning integer","opsSec":1697248.6897240116,"samples":848625},{"name":"Function returning float","opsSec":1777149.4953294238,"samples":888741},{"name":"Function returning functions","opsSec":1773976.9756254018,"samples":888840},{"name":"Function returning arrow functions","opsSec":1813573.4210547518,"samples":906793},{"name":"Function returning empty object","opsSec":1835470.1682007723,"samples":917736},{"name":"Function returning empty array","opsSec":1798577.7529693984,"samples":899810}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,666,280|35333166|
|using Array.includes (first item)|78,891,924|39446092|
|Using raw comparison|83,555,941|41777978|
|Using raw comparison (first item)|95,406,668|47704139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:52:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35333166,"opsSec":70666280.83761267},{"name":"using Array.includes (first item)","samples":39446092,"opsSec":78891924.28778525},{"name":"Using raw comparison","samples":41777978,"opsSec":83555941.46126619},{"name":"Using raw comparison (first item)","samples":47704139,"opsSec":95406668.29869246}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,432,992|20728470|
|Using Object.getOwnPropertyNames()|42,818,757|21413240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:54:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":20728470,"opsSec":41432992.47614265},{"name":"Using Object.getOwnPropertyNames()","samples":21413240,"opsSec":42818757.29457187}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|93,786,501|46909199|
|Length = 10_000 - Array.at|93,512,201|46762882|
|Length = 1_000_000 - Array.at|95,130,738|47565416|
|Length = 100 - Array[length - 1]|91,831,196|45915985|
|Length = 10_000 - Array[length - 1]|93,066,778|46537429|
|Length = 1_000_000 - Array[length - 1]|93,471,142|46744743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:57:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46909199,"opsSec":93786501.77346586},{"name":"Length = 10_000 - Array.at","samples":46762882,"opsSec":93512201.92535475},{"name":"Length = 1_000_000 - Array.at","samples":47565416,"opsSec":95130738.77187599},{"name":"Length = 100 - Array[length - 1]","samples":45915985,"opsSec":91831196.04667974},{"name":"Length = 10_000 - Array[length - 1]","samples":46537429,"opsSec":93066778.12845644},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46744743,"opsSec":93471142.66213712}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,413,040|47210856|
|~ (small)|96,963,943|48481978|
|Math.floor (long)|97,375,128|48687579|
|~ (long)|89,281,159|44640603|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":47210856,"opsSec":94413040.53987858},{"name":"~ (small)","samples":48481978,"opsSec":96963943.58861522},{"name":"Math.floor (long)","samples":48687579,"opsSec":97375128.78746137},{"name":"~ (long)","samples":44640603,"opsSec":89281159.03811035}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,296,796|15672908|
|Object.create({})|2,046,030|1037103|
|new Function with empty prototype|75,332,605|37668250|
|Empty class|73,504,762|36753121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:06:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15672908,"opsSec":31296796.578641992},{"name":"Object.create({})","samples":1037103,"opsSec":2046030.914413788},{"name":"new Function with empty prototype","samples":37668250,"opsSec":75332605.00299092},{"name":"Empty class","samples":36753121,"opsSec":73504762.49614048}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|125,518,857|62760043|
|Using optional chain (obj.field?.field2) (undefined)|86,541,559|43270799|
|Using and operator (obj.field && obj.field.field2) (Valid)|95,468,231|47734129|
|Using and operator (obj.field && obj.field.field2) (undefined)|95,303,051|47651560|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:26:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":125518857.42142355,"samples":62760043},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":86541559.92171364,"samples":43270799},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":95468231.45983167,"samples":47734129},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":95303051.57240897,"samples":47651560}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,079,526|48539785|
|Using parseInt(x, 10) - big number (10 len)|95,940,733|47975440|
|Using + - small number (2 len)|96,802,214|48403008|
|Using + - big number (10 len)|97,209,005|48605802|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:09:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48539785,"opsSec":97079526.70253108},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47975440,"opsSec":95940733.11618416},{"name":"Using + - small number (2 len)","samples":48403008,"opsSec":96802214.18983991},{"name":"Using + - big number (10 len)","samples":48605802,"opsSec":97209005.4088674}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,125,290|563548|
|Using ? operator to avoid rejection|1,109,073|554537|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:14:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":563548,"opsSec":1125290.4736855524},{"name":"Using ? operator to avoid rejection","samples":554537,"opsSec":1109073.8757837259}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|89,564,272|44784421|
|Raw usage underscore usage|93,725,119|46862566|
|Manipulating private properties using #|93,879,467|46945423|
|Manipulating private properties using underscore(_)|93,910,832|46955419|
|Manipulating private properties using Symbol|93,950,413|46975210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:17:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":44784421,"opsSec":89564272.78905939},{"name":"Raw usage underscore usage","samples":46862566,"opsSec":93725119.81573442},{"name":"Manipulating private properties using #","samples":46945423,"opsSec":93879467.80850162},{"name":"Manipulating private properties using underscore(_)","samples":46955419,"opsSec":93910832.74099337},{"name":"Manipulating private properties using Symbol","samples":46975210,"opsSec":93950413.61137187}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,943,457|3971731|
|Adding property in the object creation - small object|7,917,423|3958715|
|Adding property after the function creation - small class|276,786|138394|
|Adding property in the function creation - small class|290,843|145423|
|Adding property after the class creation - small class|271,020|137167|
|Adding property in the class creation - small class|273,693|137513|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:23:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3971731,"opsSec":7943457.805854279},{"name":"Adding property in the object creation - small object","samples":3958715,"opsSec":7917423.206850889},{"name":"Adding property after the function creation - small class","samples":138394,"opsSec":276786.9587274613},{"name":"Adding property in the function creation - small class","samples":145423,"opsSec":290843.9768892968},{"name":"Adding property after the class creation - small class","samples":137167,"opsSec":271020.8953085484},{"name":"Adding property in the class creation - small class","samples":137513,"opsSec":273693.81724008924}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|125,073,973|62626994|
|Getter|48,558,898|24333570|
|Method|94,672,357|47337388|
|DefineProperty (getter)|96,331,290|48172417|
|DefineProperty (getter & enumerable=false)|49,985,731|25009625|
|DefineProperty (getter & configurable=false)|96,789,651|48395704|
|DefineProperty (getter & enumerable=false & configurable=false)|48,075,803|24037910|
|DefineProperty (writable)|84,465,846|42237184|
|DefineProperty (writable & enumerable=false)|96,754,190|48377209|
|DefineProperty (writable & enumerable=false & configurable=false)|96,148,880|48084704|
|DefineProperties (getter)|47,491,918|23748004|
|DefineProperties (getter & enumerable=false)|48,997,124|24498568|
|DefineProperties (getter & enumerable=false & configurable=false)|48,412,290|24206803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:55:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":125073973.53255764,"samples":62626994},{"name":"Getter","opsSec":48558898.91231932,"samples":24333570},{"name":"Method","opsSec":94672357.4999553,"samples":47337388},{"name":"DefineProperty (getter)","opsSec":96331290.01328671,"samples":48172417},{"name":"DefineProperty (getter & enumerable=false)","opsSec":49985731.4679354,"samples":25009625},{"name":"DefineProperty (getter & configurable=false)","opsSec":96789651.84855686,"samples":48395704},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48075803.26962046,"samples":24037910},{"name":"DefineProperty (writable)","opsSec":84465846.07185811,"samples":42237184},{"name":"DefineProperty (writable & enumerable=false)","opsSec":96754190.4341441,"samples":48377209},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96148880.59858772,"samples":48084704},{"name":"DefineProperties (getter)","opsSec":47491918.75582745,"samples":23748004},{"name":"DefineProperties (getter & enumerable=false)","opsSec":48997124.142695956,"samples":24498568},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":48412290.541241415,"samples":24206803}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|125,302,435|62652580|
|Setter|11,285,616|5642812|
|Method|91,036,769|45519210|
|DefineProperty (setter)|97,779,388|48889712|
|DefineProperty (setter & enumerable=false)|11,022,230|5511120|
|DefineProperty (setter & configurable=false)|11,106,711|5553441|
|DefineProperty (setter & enumerable=false & configurable=false)|11,174,803|5588055|
|DefineProperty (writable)|97,842,783|48922085|
|DefineProperty (writable & enumerable=false)|98,812,004|49413692|
|DefineProperty (writable & enumerable=false & configurable=false)|97,125,839|48562955|
|DefineProperties (setter)|90,807,382|45406504|
|DefineProperties (setter & enumerable=false)|10,991,730|5495908|
|DefineProperties (setter & enumerable=false & configurable=false)|10,408,978|5204494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:02:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":125302435.67444357,"samples":62652580},{"name":"Setter","opsSec":11285616.664349169,"samples":5642812},{"name":"Method","opsSec":91036769.13922842,"samples":45519210},{"name":"DefineProperty (setter)","opsSec":97779388.21274391,"samples":48889712},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11022230.322481776,"samples":5511120},{"name":"DefineProperty (setter & configurable=false)","opsSec":11106711.57861754,"samples":5553441},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11174803.3078996,"samples":5588055},{"name":"DefineProperty (writable)","opsSec":97842783.17639126,"samples":48922085},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98812004.70196418,"samples":49413692},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":97125839.29238899,"samples":48562955},{"name":"DefineProperties (setter)","opsSec":90807382.66425872,"samples":45406504},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10991730.528303413,"samples":5495908},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10408978.382103974,"samples":5204494}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,323,874|1664390|
|Using replaceAll()|3,158,916|1581904|
|Using replaceAll(//g)|2,950,048|1475152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:08:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3323874.8780694357,"samples":1664390},{"name":"Using replaceAll()","opsSec":3158916.846875305,"samples":1581904},{"name":"Using replaceAll(//g)","opsSec":2950048.685086501,"samples":1475152}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,386,788|11710101|
|{ ...object, __proto__: null }|2,577,319|1288735|
|{ ...object, newProp: true }|19,367,467|9683937|
|structuredClone|318,706|159354|
|JSON.parse + JSON.stringify|304,932|152480|
|loop + object.keys starting with {}|1,721,466|860734|
|loop + object.keys starting with { __proto__: null }|892,789|446467|
|loop + object.keys starting with { randomProp: true }|651,576|325833|
|object.keys + reduce(FN, {})|1,790,989|895495|
|object.keys + reduce(FN, { __proto__: null })|912,207|456464|
|object.keys + reduce(FN, { newProp: true })|666,001|333002|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:15:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23386788.17317116,"samples":11710101},{"name":"{ ...object, __proto__: null }","opsSec":2577319.969049962,"samples":1288735},{"name":"{ ...object, newProp: true }","opsSec":19367467.63179415,"samples":9683937},{"name":"structuredClone","opsSec":318706.1476798697,"samples":159354},{"name":"JSON.parse + JSON.stringify","opsSec":304932.63229625137,"samples":152480},{"name":"loop + object.keys starting with {}","opsSec":1721466.640041354,"samples":860734},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":892789.784095016,"samples":446467},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":651576.9607051658,"samples":325833},{"name":"object.keys + reduce(FN, {})","opsSec":1790989.8567208115,"samples":895495},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":912207.540309079,"samples":456464},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":666001.948713998,"samples":333002}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|329,729|164866|
|Sort using first char|1,345,028|672591|
|Sort using localeCompare|1,240,335|620182|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:20:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":329729.6022063328,"samples":164866},{"name":"Sort using first char","opsSec":1345028.204095031,"samples":672591},{"name":"Sort using localeCompare","opsSec":1240335.9485621871,"samples":620182}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|4,102|2053|
|{...smallObject} - Total keys: 2|55,113,881|27583585|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,088|545|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,756|3379|
|{ ...bigObject, ...anotherBigObject }|1,535|768|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,084,408|6542209|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,543,494|13271784|
|{ ...smallObject, ...anotherSmallObject }|20,120,899|10060785|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:26:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":4102.923767258718,"samples":2053},{"name":"{...smallObject} - Total keys: 2","opsSec":55113881.04977954,"samples":27583585},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1088.3834241001841,"samples":545},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6756.771929674694,"samples":3379},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1535.6625135920378,"samples":768},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13084408.683901016,"samples":6542209},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26543494.155999262,"samples":13271784},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20120899.12898124,"samples":10060785}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,092|1047|
|streams.web.Readable reading 1e3 * "some data"|1,827|914|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:32:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2092.292342128295,"samples":1047},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1827.558458221377,"samples":914}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|12,792|6397|
|streams.web.WritableStream writing 1e3 * "some data"|1,662|835|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:37:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":12792.26475487053,"samples":6397},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1662.5114532355271,"samples":835}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|123,148,505|61579748|
|Using backtick (`)|94,812,895|48040260|
|Using array.join|9,831,993|4916182|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:43:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":123148505.7347542,"samples":61579748},{"name":"Using backtick (`)","opsSec":94812895.48027834,"samples":48040260},{"name":"Using array.join","opsSec":9831993.609136757,"samples":4916182}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|114,778,906|57392271|
|(short string) (true) String#slice and strict comparison|55,892,450|27949291|
|(long string) (true) String#endsWith|66,924,190|33462114|
|(long string) (true) String#slice and strict comparison|51,123,953|25565907|
|(short string) (false) String#endsWith|91,773,522|45886780|
|(short string) (false) String#slice and strict comparison|56,076,158|28053756|
|(long string) (false) String#endsWith|85,147,612|42580695|
|(long string) (false) String#slice and strict comparison|51,588,440|25797114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:49:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":114778906.35569793,"samples":57392271},{"name":"(short string) (true) String#slice and strict comparison","opsSec":55892450.039306186,"samples":27949291},{"name":"(long string) (true) String#endsWith","opsSec":66924190.65630162,"samples":33462114},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51123953.589887656,"samples":25565907},{"name":"(short string) (false) String#endsWith","opsSec":91773522.18930887,"samples":45886780},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56076158.24979012,"samples":28053756},{"name":"(long string) (false) String#endsWith","opsSec":85147612.60539478,"samples":42580695},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51588440.29288354,"samples":25797114}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|126,983,452|64545135|
|Using indexof|17,533,536|8774409|
|Using RegExp.test|13,846,031|6923799|
|Using RegExp.text with cached regex pattern|15,329,932|7664968|
|Using new RegExp.test|4,967,958|2484273|
|Using new RegExp.test with cached regex pattern|5,512,829|2756416|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:55:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":126983452.49226789,"samples":64545135},{"name":"Using indexof","opsSec":17533536.470953375,"samples":8774409},{"name":"Using RegExp.test","opsSec":13846031.709200993,"samples":6923799},{"name":"Using RegExp.text with cached regex pattern","opsSec":15329932.228836672,"samples":7664968},{"name":"Using new RegExp.test","opsSec":4967958.658119685,"samples":2484273},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5512829.155380156,"samples":2756416}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|115,249,326|57690854|
|(short string) (true) String#slice and strict comparison|55,927,016|27964966|
|(long string) (true) String#startsWith|63,453,631|31732077|
|(long string) (true) String#slice and strict comparison|50,743,497|25371765|
|(short string) (false) String#startsWith|93,079,242|46539858|
|(short string) (false) String#slice and strict comparison|56,032,855|28018818|
|(long string) (false) String#startsWith|83,126,691|41569899|
|(long string) (false) String#slice and strict comparison|50,867,582|25434238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:01:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":115249326.40023306,"samples":57690854},{"name":"(short string) (true) String#slice and strict comparison","opsSec":55927016.86017318,"samples":27964966},{"name":"(long string) (true) String#startsWith","opsSec":63453631.73806341,"samples":31732077},{"name":"(long string) (true) String#slice and strict comparison","opsSec":50743497.82862237,"samples":25371765},{"name":"(short string) (false) String#startsWith","opsSec":93079242.97128722,"samples":46539858},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56032855.27678779,"samples":28018818},{"name":"(long string) (false) String#startsWith","opsSec":83126691.58079185,"samples":41569899},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50867582.460046515,"samples":25434238}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|107,085,522|53543434|
|Using this|94,291,683|47147376|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:10:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":107085522.14915763,"samples":53543434},{"name":"Using this","opsSec":94291683.18287914,"samples":47147376}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,244,575|6623331|
|Date.now()|20,117,909|10060948|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:16:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":13244575.47606865,"samples":6623331},{"name":"Date.now()","opsSec":20117909.83734483,"samples":10060948}]}-->
