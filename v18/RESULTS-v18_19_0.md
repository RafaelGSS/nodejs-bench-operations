## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|819,505,367|97|
|Using dot notation|787,157,794|94|
|Using define property (writable)|4,260,711|95|
|Using define property initialized (writable)|5,897,360|90|
|Using define property (getter)|2,286,029|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":819505367.0324596,"samples":6},{"name":"Using dot notation","opsSec":787157793.5177962,"samples":8},{"name":"Using define property (writable)","opsSec":4260711.370325327,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5897360.34853542,"samples":5},{"name":"Using define property (getter)","opsSec":2286029.163858436,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.002ms
array.push|100|0.103ms
new Array(length)|100|0.014ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.325ms
new Array(length)|10,000|0.206ms
array.push|1,000,000|22.839ms
new Array(length)|1,000,000|14.82ms
array.push|100,000,000|970.14ms
new Array(length)|100,000,000|3,616.563ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.017ms
array.push|100|0.076ms
new Array(length)|100|0.008ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.258ms
new Array(length)|10,000|3.355ms
array.push|1,000,000|61.532ms
new Array(length)|1,000,000|2.537ms
array.push|100,000,000|1,412.406ms
new Array(length)|100,000,000|4,103.942ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|547|84|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":547.3554196973566,"samples":3},{"name":"Array.from","opsSec":21.556509508824515,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|818,768,621|97|
|[async] async function|16,372,442|81|
|[async] function|351,035|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":818768620.9984884,"samples":6},{"name":"[async] async function","opsSec":16372442.308637679,"samples":7},{"name":"[async] function","opsSec":351035.24399498705,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,169|82|
|new Blob (1024)|688|81|
|text (128)|33,791|77|
|text (1024)|23,490|85|
|arrayBuffer (128)|34,210|79|
|arrayBuffer (1024)|23,493|82|
|slice (0, 64)|87,050|80|
|slice (0, 512)|40,120|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5168.853133526887,"samples":6},{"name":"new Blob (1024)","opsSec":688.1115696121568,"samples":2},{"name":"text (128)","opsSec":33790.95762690655,"samples":4},{"name":"text (1024)","opsSec":23489.968085882432,"samples":3},{"name":"arrayBuffer (128)","opsSec":34210.16486714638,"samples":4},{"name":"arrayBuffer (1024)","opsSec":23492.94317770886,"samples":3},{"name":"slice (0, 64)","opsSec":87050.17579847778,"samples":3},{"name":"slice (0, 512)","opsSec":40119.951756050956,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|261,492|55|
|[True conditional] Using constructor name|204,829|95|
|[True conditional] Check if property is valid then instanceof |207,851|96|
|[False conditional] Using instanceof only|819,775,360|96|
|[False conditional] Using constructor name|815,010,673|90|
|[False conditional] Check if property is valid then instanceof |820,281,907|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":261491.90293942794,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":204829.13889423557,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":207850.81729145406,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":819775359.9137529,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":815010672.9061419,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":820281907.4632835,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,387|90|
|crypto.verify('RSA-SHA256')|6,472|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6387.269995427675,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":6472.086649794424,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,521,495|91|
|fromUnixToISOString(new Date())|2,121,397|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2521495.291790346,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2121396.5637922287,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,082|84|
|Intl.DateTimeFormat().format(new Date())|13,818|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,948|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,285|81|
|Reusing Intl.DateTimeFormat()|712,963|96|
|Date.toLocaleDateString()|732,657|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,900|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15082.49585147802,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13817.790465175427,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17947.646555409538,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16284.513205905036,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":712962.8377960159,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":732657.3660158613,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16900.453688701244,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|973,058|95|
|Using brackets {}|986,060|95|
|Using '' + |993,676|96|
|Using date.toString()|1,092,743|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":973058.2137640811,"samples":4},{"name":"Using brackets {}","opsSec":986059.6253381257,"samples":4},{"name":"Using '' + ","opsSec":993675.6785243332,"samples":6},{"name":"Using date.toString()","opsSec":1092743.396453077,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,446,691|96|
|Using delete property (proto: null)|21,552,372|97|
|Using delete property (cached proto: null)|3,467,848|97|
|Using undefined assignment|823,027,520|96|
|Using undefined assignment (proto: null)|23,794,827|90|
|Using undefined property (cached proto: null)|819,823,403|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3446690.9357008096,"samples":6},{"name":"Using delete property (proto: null)","opsSec":21552372.291991495,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3467848.0844576643,"samples":7},{"name":"Using undefined assignment","opsSec":823027519.5682566,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23794827.276386786,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":819823402.585496,"samples":7}]}-->
