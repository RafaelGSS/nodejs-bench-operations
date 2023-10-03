## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|715,364,753|98|
|Using indexof|716,568,021|95|
|Using RegExp.test|11,223,081|92|
|Using RegExp.text with cached regex pattern|11,783,316|97|
|Using new RegExp.test|3,022,872|96|
|Using new RegExp.test with cached regex pattern|3,424,976|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:10 GMT+0000 (Coordinated Universal Time)
</details>

