## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|712,920,304|95|
|Length = 10_000 - Array.at|711,714,824|94|
|Length = 1_000_000 - Array.at|714,107,310|99|
|Length = 100 - Array[length - 1]|716,352,514|98|
|Length = 10_000 - Array[length - 1]|717,252,848|97|
|Length = 1_000_000 - Array[length - 1]|715,067,087|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:23 GMT+0000 (Coordinated Universal Time)
</details>

