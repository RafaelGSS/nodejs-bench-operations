## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|588,639,959|96|
|Using dot notation|592,568,568|92|
|Using define property (writable)|2,591,364|98|
|Using define property initialized (writable)|3,398,661|92|
|Using define property (getter)|1,388,167|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:48 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|587,968,542|94|
|Using dot notation|597,546,473|95|
|Using define property (writable)|2,614,485|93|
|Using define property initialized (writable)|3,439,034|93|
|Using define property (getter)|1,399,953|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:42 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.017ms
new Array(length)|10|0.003ms
array.push|100|0.109ms
new Array(length)|100|0.019ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.568ms
new Array(length)|10,000|0.517ms
array.push|1,000,000|46.41ms
new Array(length)|1,000,000|10.589ms
array.push|100,000,000|2,540.854ms
new Array(length)|100,000,000|5,821.659ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.022ms
array.push|100|0.055ms
new Array(length)|100|0.013ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.391ms
new Array(length)|10,000|0.324ms
array.push|1,000,000|44.703ms
new Array(length)|1,000,000|4.747ms
array.push|100,000,000|2,853.451ms
new Array(length)|100,000,000|6,523.44ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:03 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|319|73|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:47 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,986|84|
|new Blob (1024)|357|63|
|text (128)|3,380|86|
|text (1024)|425|84|
|arrayBuffer (128)|3,389|86|
|arrayBuffer (1024)|429|86|
|slice (0, 64)|43,676|65|
|slice (0, 512)|11,273|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:59 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|177,677|57|
|[True conditional] Using constructor name|144,084|93|
|[True conditional] Check if property is valid then instanceof |144,900|91|
|[False conditional] Using instanceof only|719,013,279|98|
|[False conditional] Using constructor name|716,971,271|95|
|[False conditional] Check if property is valid then instanceof |718,986,143|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.041ms
new Array(length)|100|0.016ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.525ms
array.push|1,000,000|32.677ms
new Array(length)|1,000,000|8.025ms
array.push|100,000,000|1,659.375ms
new Array(length)|100,000,000|4,899.017ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.31ms
new Array(length)|10,000|2.391ms
array.push|1,000,000|26.035ms
new Array(length)|1,000,000|4.45ms
array.push|100,000,000|2,585.082ms
new Array(length)|100,000,000|4,478.149ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:18 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>

