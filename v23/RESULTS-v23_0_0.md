## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|90,874,298|45877240|
|Using dot notation|65,305,237|33162498|
|Using define property (writable)|4,206,061|2112781|
|Using define property initialized (writable)|3,041,001|1520502|
|Using define property (getter)|2,201,846|1102405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:46:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":90874298.44406314,"samples":45877240},{"name":"Using dot notation","opsSec":65305237.990635306,"samples":33162498},{"name":"Using define property (writable)","opsSec":4206061.144292437,"samples":2112781},{"name":"Using define property initialized (writable)","opsSec":3041001.469886777,"samples":1520502},{"name":"Using define property (getter)","opsSec":2201846.54354443,"samples":1102405}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.009ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.181ms
array.push|1,000,000|29.825ms
new Array(length)|1,000,000|6.805ms
array.push|100,000,000|1,832.759ms
new Array(length)|100,000,000|3,990ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|177.637ms
new Array(length)|10,000|0.032ms
array.push|1,000,000|16.2ms
new Array(length)|1,000,000|7.419ms
array.push|100,000,000|1,955.219ms
new Array(length)|100,000,000|4,663.106ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|333|168|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:00:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":333.6300880291328,"samples":168},{"name":"Array.from","opsSec":23.79170344599667,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,927|2464|
|new Blob (1024)|629|317|
|text (128)|4,320|2161|
|text (1024)|550|276|
|arrayBuffer (128)|4,387|2194|
|arrayBuffer (1024)|549|275|
|slice (0, 64)|150,159|86444|
|slice (0, 512)|32,651|16326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:06:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4927.344111370647,"samples":2464},{"name":"new Blob (1024)","opsSec":629.9450437533596,"samples":317},{"name":"text (128)","opsSec":4320.142649710895,"samples":2161},{"name":"text (1024)","opsSec":550.8769239099632,"samples":276},{"name":"arrayBuffer (128)","opsSec":4387.990987066512,"samples":2194},{"name":"arrayBuffer (1024)","opsSec":549.8473063033449,"samples":275},{"name":"slice (0, 64)","opsSec":150159.64198261534,"samples":86444},{"name":"slice (0, 512)","opsSec":32651.176406726314,"samples":16326}]}-->

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

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,640|3321|
|crypto.verify('RSA-SHA256')|6,799|3400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:17:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6640.184573537595,"samples":3321},{"name":"crypto.verify('RSA-SHA256')","opsSec":6799.341157440526,"samples":3400}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,232,525|616307|
|fromUnixToISOString(new Date())|2,342,481|1171241|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:23:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1232525.7265074677,"samples":616307},{"name":"fromUnixToISOString(new Date())","opsSec":2342481.0161579736,"samples":1171241}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,985|9994|
|Intl.DateTimeFormat().format(new Date())|19,583|9792|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,996|9499|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,182|9592|
|Reusing Intl.DateTimeFormat()|597,926|298989|
|Date.toLocaleDateString()|1,078,626|539315|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,719|12361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:29:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19985.44430135363,"samples":9994},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19583.67267849485,"samples":9792},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18996.714872238892,"samples":9499},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19182.04803479198,"samples":9592},{"name":"Reusing Intl.DateTimeFormat()","opsSec":597926.3439472937,"samples":298989},{"name":"Date.toLocaleDateString()","opsSec":1078626.9755299606,"samples":539315},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":24719.638681234614,"samples":12361}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|877,003|438503|
|Using brackets {}|926,055|463029|
|Using '' + |928,161|464081|
|Using date.toString()|1,008,634|504348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:35:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":877003.8671265951,"samples":438503},{"name":"Using brackets {}","opsSec":926055.0921870106,"samples":463029},{"name":"Using '' + ","opsSec":928161.4616663522,"samples":464081},{"name":"Using date.toString()","opsSec":1008634.0739023987,"samples":504348}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,938,479|1969433|
|Using delete property (proto: null)|17,171,430|8586188|
|Using delete property (cached proto: null)|3,921,535|1960814|
|Using undefined assignment|67,835,268|33917652|
|Using undefined assignment (proto: null)|18,247,282|9125552|
|Using undefined property (cached proto: null)|70,846,584|35428118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:41:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3938479.611519232,"samples":1969433},{"name":"Using delete property (proto: null)","opsSec":17171430.57537538,"samples":8586188},{"name":"Using delete property (cached proto: null)","opsSec":3921535.7811645702,"samples":1960814},{"name":"Using undefined assignment","opsSec":67835268.45431933,"samples":33917652},{"name":"Using undefined assignment (proto: null)","opsSec":18247282.39865812,"samples":9125552},{"name":"Using undefined property (cached proto: null)","opsSec":70846584.00308858,"samples":35428118}]}-->
