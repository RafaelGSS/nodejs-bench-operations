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
