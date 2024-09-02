## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,084,133|7542069|
|Using dot notation|14,829,183|7414592|
|Using define property (writable)|2,843,328|1421665|
|Using define property initialized (writable)|3,627,291|1813646|
|Using define property (getter)|1,776,545|888273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15084133.324458163,"samples":7542069},{"name":"Using dot notation","opsSec":14829183.377337873,"samples":7414592},{"name":"Using define property (writable)","opsSec":2843328.5726163415,"samples":1421665},{"name":"Using define property initialized (writable)","opsSec":3627291.0062555242,"samples":1813646},{"name":"Using define property (getter)","opsSec":1776545.928948273,"samples":888273}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.01ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.373ms
new Array(length)|10,000|0.139ms
array.push|1,000,000|25.492ms
new Array(length)|1,000,000|14.718ms
array.push|100,000,000|1,849.421ms
new Array(length)|100,000,000|4,115.064ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.015ms
new Array(length)|100|0.01ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.458ms
new Array(length)|10,000|3.268ms
array.push|1,000,000|254.166ms
new Array(length)|1,000,000|4.601ms
array.push|100,000,000|2,302.592ms
new Array(length)|100,000,000|4,408.589ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|272|137|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:31:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":272.51970023989526,"samples":137},{"name":"Array.from","opsSec":21.628210499182504,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,388|2195|
|new Blob (1024)|534|268|
|text (128)|47,737|23869|
|text (1024)|29,674|14838|
|arrayBuffer (128)|50,162|25082|
|arrayBuffer (1024)|35,332|17667|
|slice (0, 64)|91,717|45859|
|slice (0, 512)|48,405|24371|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:36:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4388.805490006513,"samples":2195},{"name":"new Blob (1024)","opsSec":534.869221212033,"samples":268},{"name":"text (128)","opsSec":47737.06635857147,"samples":23869},{"name":"text (1024)","opsSec":29674.127088056244,"samples":14838},{"name":"arrayBuffer (128)","opsSec":50162.48298641103,"samples":25082},{"name":"arrayBuffer (1024)","opsSec":35332.398525067234,"samples":17667},{"name":"slice (0, 64)","opsSec":91717.23471551748,"samples":45859},{"name":"slice (0, 512)","opsSec":48405.36864002685,"samples":24371}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|279,729|139865|
|[True conditional] Using constructor name|269,649|134825|
|[True conditional] Check if property is valid then instanceof |276,429|138215|
|[False conditional] Using instanceof only|11,350,843|5675422|
|[False conditional] Using constructor name|15,033,422|7516743|
|[False conditional] Check if property is valid then instanceof |15,138,404|7569203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:44:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":279729.7521748769,"samples":139865},{"name":"[True conditional] Using constructor name","opsSec":269649.58203067345,"samples":134825},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":276429.8142205015,"samples":138215},{"name":"[False conditional] Using instanceof only","opsSec":11350843.904472472,"samples":5675422},{"name":"[False conditional] Using constructor name","opsSec":15033422.955042426,"samples":7516743},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15138404.302392144,"samples":7569203}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,192|3597|
|crypto.verify('RSA-SHA256')|7,166|3584|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:53:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7192.32640305407,"samples":3597},{"name":"crypto.verify('RSA-SHA256')","opsSec":7166.623864859068,"samples":3584}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,650,834|825418|
|fromUnixToISOString(new Date())|1,830,227|915114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:58:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1650834.3823006705,"samples":825418},{"name":"fromUnixToISOString(new Date())","opsSec":1830227.5608954486,"samples":915114}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,260|8631|
|Intl.DateTimeFormat().format(new Date())|19,856|9929|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,059|11030|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,465|10733|
|Reusing Intl.DateTimeFormat()|669,220|334611|
|Date.toLocaleDateString()|692,390|346196|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,350|10676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:02:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17260.76261131604,"samples":8631},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19856.771741085508,"samples":9929},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22059.210502106882,"samples":11030},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21465.72103180423,"samples":10733},{"name":"Reusing Intl.DateTimeFormat()","opsSec":669220.1690489129,"samples":334611},{"name":"Date.toLocaleDateString()","opsSec":692390.1455184206,"samples":346196},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21350.31255713024,"samples":10676}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|824,028|412015|
|Using brackets {}|827,673|413837|
|Using '' + |828,466|414234|
|Using date.toString()|894,218|447110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:09:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":824028.6353068643,"samples":412015},{"name":"Using brackets {}","opsSec":827673.0646409927,"samples":413837},{"name":"Using '' + ","opsSec":828466.7242448897,"samples":414234},{"name":"Using date.toString()","opsSec":894218.698045138,"samples":447110}]}-->
