## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|12,009,869|98|
|Using indexof|593,705,699|97|
|Using RegExp.test|11,145,106|95|
|Using RegExp.text with cached regex pattern|11,642,109|97|
|Using new RegExp.test|3,145,311|95|
|Using new RegExp.test with cached regex pattern|3,592,717|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:16 GMT+0000 (Coordinated Universal Time)
</details>

