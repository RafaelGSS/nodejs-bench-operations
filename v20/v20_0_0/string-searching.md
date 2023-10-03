## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|596,408,635|95|
|Using indexof|597,869,972|97|
|Using RegExp.test|11,424,693|95|
|Using RegExp.text with cached regex pattern|11,769,094|97|
|Using new RegExp.test|3,325,863|97|
|Using new RegExp.test with cached regex pattern|3,980,195|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:07:07 GMT+0000 (Coordinated Universal Time)
</details>

