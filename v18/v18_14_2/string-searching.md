## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|587,756,228|97|
|Using indexof|591,593,719|96|
|Using RegExp.test|11,385,711|95|
|Using RegExp.text with cached regex pattern|11,893,985|95|
|Using new RegExp.test|3,090,022|96|
|Using new RegExp.test with cached regex pattern|3,625,030|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:25 GMT+0000 (Coordinated Universal Time)
</details>

