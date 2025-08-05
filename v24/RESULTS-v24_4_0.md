## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|104,684,938|52386528|
|Using dot notation|78,224,394|39112205|
|Using define property (writable)|5,010,737|2506401|
|Using define property initialized (writable)|7,123,149|3561577|
|Using define property (getter)|2,403,071|1201658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:14:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":52386528,"opsSec":104684938.7090609},{"name":"Using dot notation","samples":39112205,"opsSec":78224394.66801864},{"name":"Using define property (writable)","samples":2506401,"opsSec":5010737.12533802},{"name":"Using define property initialized (writable)","samples":3561577,"opsSec":7123149.583647258},{"name":"Using define property (getter)","samples":1201658,"opsSec":2403071.7133419085}]}-->

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|323|162|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:16:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":162,"opsSec":323.1371810724287},{"name":"Array.from","samples":12,"opsSec":23.81636113712161}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,668|2336|
|new Blob (1024)|633|317|
|text (128)|4,442|2224|
|text (1024)|551|277|
|arrayBuffer (128)|4,370|2188|
|arrayBuffer (1024)|555|279|
|slice (0, 64)|165,577|82791|
|slice (0, 512)|20,058|11508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:18:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2336,"opsSec":4668.667757063067},{"name":"new Blob (1024)","samples":317,"opsSec":633.4085636214385},{"name":"text (128)","samples":2224,"opsSec":4442.886078180116},{"name":"text (1024)","samples":277,"opsSec":551.6971795605006},{"name":"arrayBuffer (128)","samples":2188,"opsSec":4370.8225159637805},{"name":"arrayBuffer (1024)","samples":279,"opsSec":555.2496331302483},{"name":"slice (0, 64)","samples":82791,"opsSec":165577.5489443293},{"name":"slice (0, 512)","samples":11508,"opsSec":20058.328706551903}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.73 ms|1|
|Gzip|134.34 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:19:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132732029},{"name":"Gzip","samples":1,"totalTime":0.13434098}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,910|3456|
|crypto.verify('RSA-SHA256')|6,847|3424|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:20:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3456,"opsSec":6910.440299803454},{"name":"crypto.verify('RSA-SHA256')","samples":3424,"opsSec":6847.27403831191}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,552,070|776048|
|fromUnixToISOString(new Date())|2,703,936|1351969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:21:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":776048,"opsSec":1552070.2076972884},{"name":"fromUnixToISOString(new Date())","samples":1351969,"opsSec":2703936.188362754}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,061|11031|
|Intl.DateTimeFormat().format(new Date())|21,772|10887|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,365|10683|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,501|10254|
|Reusing Intl.DateTimeFormat()|461,849|230931|
|Date.toLocaleDateString()|1,042,457|521233|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,447|13225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:22:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11031,"opsSec":22061.24912332484},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10887,"opsSec":21772.87395050503},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10683,"opsSec":21365.462231315636},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10254,"opsSec":20501.75893655157},{"name":"Reusing Intl.DateTimeFormat()","samples":230931,"opsSec":461849.7194159607},{"name":"Date.toLocaleDateString()","samples":521233,"opsSec":1042457.9730736073},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13225,"opsSec":26447.905484573053}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,058,349|529569|
|Using brackets {}|1,077,084|539508|
|Using '' + |1,119,405|559707|
|Using date.toString()|1,246,746|623379|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:23:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":529569,"opsSec":1058349.8214875425},{"name":"Using brackets {}","samples":539508,"opsSec":1077084.9568517879},{"name":"Using '' + ","samples":559707,"opsSec":1119405.322369941},{"name":"Using date.toString()","samples":623379,"opsSec":1246746.9737697642}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,093,705|2046854|
|Using delete property (proto: null)|17,036,330|8518169|
|Using delete property (cached proto: null)|4,215,323|2107664|
|Using undefined assignment|77,711,320|38857642|
|Using undefined assignment (proto: null)|20,000,835|10000421|
|Using undefined property (cached proto: null)|76,871,237|38441839|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:24:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2046854,"opsSec":4093705.8303359095},{"name":"Using delete property (proto: null)","samples":8518169,"opsSec":17036330.333651353},{"name":"Using delete property (cached proto: null)","samples":2107664,"opsSec":4215323.8099681325},{"name":"Using undefined assignment","samples":38857642,"opsSec":77711320.72264314},{"name":"Using undefined assignment (proto: null)","samples":10000421,"opsSec":20000835.679735925},{"name":"Using undefined property (cached proto: null)","samples":38441839,"opsSec":76871237.77384858}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|357,447|178724|
|NodeError|323,585|161795|
|NodeError Range|313,436|156957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:26:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":178724,"opsSec":357447.285820323},{"name":"NodeError","samples":161795,"opsSec":323585.21870480845},{"name":"NodeError Range","samples":156957,"opsSec":313436.42319071275}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,147,832|34580204|
|using Array.includes (first item)|77,276,406|38641487|
|Using raw comparison|96,899,756|48450421|
|Using raw comparison (first item)|96,899,156|48449583|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:26:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":34580204,"opsSec":69147832.636861},{"name":"using Array.includes (first item)","samples":38641487,"opsSec":77276406.58730976},{"name":"Using raw comparison","samples":48450421,"opsSec":96899756.14133269},{"name":"Using raw comparison (first item)","samples":48449583,"opsSec":96899156.31008436}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,974,287|20492970|
|Using Object.getOwnPropertyNames()|46,301,384|23150694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:27:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":20492970,"opsSec":40974287.97783059},{"name":"Using Object.getOwnPropertyNames()","samples":23150694,"opsSec":46301384.573697545}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|90,968,762|45485137|
|Length = 10_000 - Array.at|94,411,369|47249748|
|Length = 1_000_000 - Array.at|96,884,458|48442249|
|Length = 100 - Array[length - 1]|94,762,844|47401705|
|Length = 10_000 - Array[length - 1]|90,462,524|45231291|
|Length = 1_000_000 - Array[length - 1]|94,400,328|47222922|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:28:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":45485137,"opsSec":90968762.64497742},{"name":"Length = 10_000 - Array.at","samples":47249748,"opsSec":94411369.78392534},{"name":"Length = 1_000_000 - Array.at","samples":48442249,"opsSec":96884458.47114094},{"name":"Length = 100 - Array[length - 1]","samples":47401705,"opsSec":94762844.49010774},{"name":"Length = 10_000 - Array[length - 1]","samples":45231291,"opsSec":90462524.28490952},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47222922,"opsSec":94400328.8814298}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,770,660|47385341|
|~ (small)|93,075,995|46552820|
|Math.floor (long)|94,494,632|47252453|
|~ (long)|93,615,179|46810695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:29:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47385341,"opsSec":94770660.96091327},{"name":"~ (small)","samples":46552820,"opsSec":93075995.29549837},{"name":"Math.floor (long)","samples":47252453,"opsSec":94494632.54354987},{"name":"~ (long)","samples":46810695,"opsSec":93615179.94342327}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,529,369|19323392|
|Object.create({})|2,097,302|1048652|
|new Function with empty prototype|70,695,980|35352382|
|Empty class|73,786,638|36894004|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:30:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":19323392,"opsSec":38529369.82955763},{"name":"Object.create({})","samples":1048652,"opsSec":2097302.2592391246},{"name":"new Function with empty prototype","samples":35352382,"opsSec":70695980.30723076},{"name":"Empty class","samples":36894004,"opsSec":73786638.22484799}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|90,875,631|45437825|
|Using parseInt(x, 10) - big number (10 len)|95,367,825|47683923|
|Using + - small number (2 len)|95,047,928|47523976|
|Using + - big number (10 len)|95,426,018|47713021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:31:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":45437825,"opsSec":90875631.6431224},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47683923,"opsSec":95367825.59128533},{"name":"Using + - small number (2 len)","samples":47523976,"opsSec":95047928.42811374},{"name":"Using + - big number (10 len)","samples":47713021,"opsSec":95426018.14349546}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,192,131|602692|
|Using ? operator to avoid rejection|1,195,269|597950|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:31:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":602692,"opsSec":1192131.9677816748},{"name":"Using ? operator to avoid rejection","samples":597950,"opsSec":1195269.1011103608}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|96,583,646|48291839|
|Raw usage underscore usage|96,990,724|48495375|
|Manipulating private properties using #|97,896,464|48948246|
|Manipulating private properties using underscore(_)|97,813,650|48919573|
|Manipulating private properties using Symbol|95,544,992|47779754|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:32:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":48291839,"opsSec":96583646.51373123},{"name":"Raw usage underscore usage","samples":48495375,"opsSec":96990724.00648597},{"name":"Manipulating private properties using #","samples":48948246,"opsSec":97896464.98057567},{"name":"Manipulating private properties using underscore(_)","samples":48919573,"opsSec":97813650.28517127},{"name":"Manipulating private properties using Symbol","samples":47779754,"opsSec":95544992.99575406}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,070,032|3535202|
|Adding property in the object creation - small object|7,425,788|3716099|
|Adding property after the function creation - small class|273,415|136708|
|Adding property in the function creation - small class|291,115|145731|
|Adding property after the class creation - small class|283,574|141788|
|Adding property in the class creation - small class|272,353|143656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:33:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3535202,"opsSec":7070032.003196119},{"name":"Adding property in the object creation - small object","samples":3716099,"opsSec":7425788.282328343},{"name":"Adding property after the function creation - small class","samples":136708,"opsSec":273415.35583342164},{"name":"Adding property in the function creation - small class","samples":145731,"opsSec":291115.29333025543},{"name":"Adding property after the class creation - small class","samples":141788,"opsSec":283574.7709869425},{"name":"Adding property in the class creation - small class","samples":143656,"opsSec":272353.10949962115}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|92,276,077|46140801|
|Getter|52,689,064|26368424|
|Method|95,522,838|47761445|
|DefineProperty (getter)|94,489,536|47252783|
|DefineProperty (getter & enumerable=false)|52,925,950|26662803|
|DefineProperty (getter & configurable=false)|92,767,527|46391465|
|DefineProperty (getter & enumerable=false & configurable=false)|53,292,264|26653713|
|DefineProperty (writable)|95,443,692|47723888|
|DefineProperty (writable & enumerable=false)|95,288,438|47649845|
|DefineProperty (writable & enumerable=false & configurable=false)|94,202,916|47116203|
|DefineProperties (getter)|53,901,566|26950917|
|DefineProperties (getter & enumerable=false)|52,986,958|26533968|
|DefineProperties (getter & enumerable=false & configurable=false)|53,763,457|26881735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:35:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":46140801,"opsSec":92276077.8003264},{"name":"Getter","samples":26368424,"opsSec":52689064.603445515},{"name":"Method","samples":47761445,"opsSec":95522838.41766725},{"name":"DefineProperty (getter)","samples":47252783,"opsSec":94489536.98392512},{"name":"DefineProperty (getter & enumerable=false)","samples":26662803,"opsSec":52925950.0838006},{"name":"DefineProperty (getter & configurable=false)","samples":46391465,"opsSec":92767527.43634963},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26653713,"opsSec":53292264.45734641},{"name":"DefineProperty (writable)","samples":47723888,"opsSec":95443692.15530005},{"name":"DefineProperty (writable & enumerable=false)","samples":47649845,"opsSec":95288438.9128638},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47116203,"opsSec":94202916.34225655},{"name":"DefineProperties (getter)","samples":26950917,"opsSec":53901566.10921644},{"name":"DefineProperties (getter & enumerable=false)","samples":26533968,"opsSec":52986958.46877227},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26881735,"opsSec":53763457.41935096}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|91,320,628|45660325|
|Setter|10,798,636|5399585|
|Method|86,327,242|43184996|
|DefineProperty (setter)|89,943,143|44982925|
|DefineProperty (setter & enumerable=false)|10,728,532|5364764|
|DefineProperty (setter & configurable=false)|10,759,853|5383006|
|DefineProperty (setter & enumerable=false & configurable=false)|10,819,581|5409794|
|DefineProperty (writable)|89,519,736|44760602|
|DefineProperty (writable & enumerable=false)|89,626,689|44813357|
|DefineProperty (writable & enumerable=false & configurable=false)|90,245,088|45128543|
|DefineProperties (setter)|91,298,244|45649148|
|DefineProperties (setter & enumerable=false)|10,583,049|5297270|
|DefineProperties (setter & enumerable=false & configurable=false)|10,463,466|5231739|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:36:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":45660325,"opsSec":91320628.26569048},{"name":"Setter","samples":5399585,"opsSec":10798636.05064184},{"name":"Method","samples":43184996,"opsSec":86327242.2316834},{"name":"DefineProperty (setter)","samples":44982925,"opsSec":89943143.49365246},{"name":"DefineProperty (setter & enumerable=false)","samples":5364764,"opsSec":10728532.799840422},{"name":"DefineProperty (setter & configurable=false)","samples":5383006,"opsSec":10759853.232167559},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5409794,"opsSec":10819581.941034114},{"name":"DefineProperty (writable)","samples":44760602,"opsSec":89519736.23440471},{"name":"DefineProperty (writable & enumerable=false)","samples":44813357,"opsSec":89626689.80079377},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45128543,"opsSec":90245088.63742636},{"name":"DefineProperties (setter)","samples":45649148,"opsSec":91298244.32519372},{"name":"DefineProperties (setter & enumerable=false)","samples":5297270,"opsSec":10583049.982633855},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5231739,"opsSec":10463466.17628322}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,003,827|2001915|
|Using replaceAll()|3,097,451|1548892|
|Using replaceAll(//g)|3,439,050|1719848|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:37:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":2001915,"opsSec":4003827.765864107},{"name":"Using replaceAll()","samples":1548892,"opsSec":3097451.903596704},{"name":"Using replaceAll(//g)","samples":1719848,"opsSec":3439050.538360657}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,834,632|12417573|
|{ ...object, __proto__: null }|2,413,322|1206662|
|{ ...object, newProp: true }|22,624,040|11312639|
|structuredClone|294,291|147146|
|JSON.parse + JSON.stringify|300,799|150415|
|loop + object.keys starting with {}|1,730,678|865523|
|loop + object.keys starting with { __proto__: null }|923,920|462009|
|loop + object.keys starting with { randomProp: true }|682,023|341013|
|object.keys + reduce(FN, {})|1,762,149|881217|
|object.keys + reduce(FN, { __proto__: null })|945,012|472611|
|object.keys + reduce(FN, { newProp: true })|699,846|349943|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:38:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":12417573,"opsSec":24834632.22112861},{"name":"{ ...object, __proto__: null }","samples":1206662,"opsSec":2413322.2913678177},{"name":"{ ...object, newProp: true }","samples":11312639,"opsSec":22624040.464986566},{"name":"structuredClone","samples":147146,"opsSec":294291.0800460838},{"name":"JSON.parse + JSON.stringify","samples":150415,"opsSec":300799.07905786915},{"name":"loop + object.keys starting with {}","samples":865523,"opsSec":1730678.3519976852},{"name":"loop + object.keys starting with { __proto__: null }","samples":462009,"opsSec":923920.6002903174},{"name":"loop + object.keys starting with { randomProp: true }","samples":341013,"opsSec":682023.5419871546},{"name":"object.keys + reduce(FN, {})","samples":881217,"opsSec":1762149.5432478318},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":472611,"opsSec":945012.4604971091},{"name":"object.keys + reduce(FN, { newProp: true })","samples":349943,"opsSec":699846.1885497181}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|326,849|163538|
|Sort using first char|1,347,255|673650|
|Sort using localeCompare|1,245,833|623058|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:39:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Sort using default","samples":163538,"opsSec":326849.86173246347},{"name":"Sort using first char","samples":673650,"opsSec":1347255.3169301588},{"name":"Sort using localeCompare","samples":623058,"opsSec":1245833.6068963248}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,161|1582|
|{...smallObject} - Total keys: 2|40,418,195|20209569|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,133|567|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,621|3311|
|{ ...bigObject, ...anotherBigObject }|1,542|772|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,167,913|6084175|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,953,228|12976617|
|{ ...smallObject, ...anotherSmallObject }|19,763,967|9884418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:40:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1582,"opsSec":3161.8251954521616},{"name":"{...smallObject} - Total keys: 2","samples":20209569,"opsSec":40418195.28601315},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":567,"opsSec":1133.7730345113132},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3311,"opsSec":6621.401266411886},{"name":"{ ...bigObject, ...anotherBigObject }","samples":772,"opsSec":1542.7652694153373},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6084175,"opsSec":12167913.634281246},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":12976617,"opsSec":25953228.75744779},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9884418,"opsSec":19763967.50235721}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,957|980|
|streams.web.Readable reading 1e3 * "some data"|1,804|903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:41:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":980,"opsSec":1957.9687171022545},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":903,"opsSec":1804.404895246173}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,300|5152|
|streams.web.WritableStream writing 1e3 * "some data"|1,662|851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:42:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5152,"opsSec":10300.683509531804},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":851,"opsSec":1662.0888780680154}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,561,364|47341704|
|Using backtick (`)|93,694,086|46848041|
|Using array.join|9,915,417|4957711|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:43:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":47341704,"opsSec":94561364.45531577},{"name":"Using backtick (`)","samples":46848041,"opsSec":93694086.87811401},{"name":"Using array.join","samples":4957711,"opsSec":9915417.240599725}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,426,730|41213371|
|(short string) (true) String#slice and strict comparison|51,274,369|25640247|
|(long string) (true) String#endsWith|59,051,367|29529159|
|(long string) (true) String#slice and strict comparison|46,624,826|23314676|
|(short string) (false) String#endsWith|90,717,444|45394488|
|(short string) (false) String#slice and strict comparison|52,315,908|26162544|
|(long string) (false) String#endsWith|82,375,637|41188149|
|(long string) (false) String#slice and strict comparison|46,533,397|23271216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:44:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41213371,"opsSec":82426730.62511116},{"name":"(short string) (true) String#slice and strict comparison","samples":25640247,"opsSec":51274369.99434535},{"name":"(long string) (true) String#endsWith","samples":29529159,"opsSec":59051367.77211596},{"name":"(long string) (true) String#slice and strict comparison","samples":23314676,"opsSec":46624826.87405256},{"name":"(short string) (false) String#endsWith","samples":45394488,"opsSec":90717444.02534181},{"name":"(short string) (false) String#slice and strict comparison","samples":26162544,"opsSec":52315908.02298739},{"name":"(long string) (false) String#endsWith","samples":41188149,"opsSec":82375637.34738846},{"name":"(long string) (false) String#slice and strict comparison","samples":23271216,"opsSec":46533397.913062364}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,235,237|8124086|
|Using indexof|16,147,159|8074161|
|Using RegExp.test|12,660,113|6331275|
|Using RegExp.text with cached regex pattern|13,446,477|6723256|
|Using new RegExp.test|4,667,399|2333787|
|Using new RegExp.test with cached regex pattern|5,188,429|2594216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:45:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":8124086,"opsSec":16235237.710820543},{"name":"Using indexof","samples":8074161,"opsSec":16147159.630566834},{"name":"Using RegExp.test","samples":6331275,"opsSec":12660113.459883738},{"name":"Using RegExp.text with cached regex pattern","samples":6723256,"opsSec":13446477.469445858},{"name":"Using new RegExp.test","samples":2333787,"opsSec":4667399.70062558},{"name":"Using new RegExp.test with cached regex pattern","samples":2594216,"opsSec":5188429.302016763}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,179,165|42645179|
|(short string) (true) String#slice and strict comparison|56,090,167|28053544|
|(long string) (true) String#startsWith|67,616,289|33809406|
|(long string) (true) String#slice and strict comparison|51,161,024|25584515|
|(short string) (false) String#startsWith|91,676,182|45863360|
|(short string) (false) String#slice and strict comparison|56,262,449|28132194|
|(long string) (false) String#startsWith|87,288,003|43644810|
|(long string) (false) String#slice and strict comparison|49,691,456|24845856|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:46:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42645179,"opsSec":85179165.7984001},{"name":"(short string) (true) String#slice and strict comparison","samples":28053544,"opsSec":56090167.83996939},{"name":"(long string) (true) String#startsWith","samples":33809406,"opsSec":67616289.2362486},{"name":"(long string) (true) String#slice and strict comparison","samples":25584515,"opsSec":51161024.01599583},{"name":"(short string) (false) String#startsWith","samples":45863360,"opsSec":91676182.40433541},{"name":"(short string) (false) String#slice and strict comparison","samples":28132194,"opsSec":56262449.758605815},{"name":"(long string) (false) String#startsWith","samples":43644810,"opsSec":87288003.60074931},{"name":"(long string) (false) String#slice and strict comparison","samples":24845856,"opsSec":49691456.98344276}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|88,522,120|44299181|
|Using this|98,354,010|49177321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:47:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using super","samples":44299181,"opsSec":88522120.73012301},{"name":"Using this","samples":49177321,"opsSec":98354010.56725216}]}-->
