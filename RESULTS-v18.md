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
