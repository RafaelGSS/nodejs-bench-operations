## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|80|
|Array.from|12|34|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:02:36 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,128,995|93|
|Using replaceAll()|1,980,419|96|
|Using replaceAll(//g)|1,879,198|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:32 GMT+0000 (Coordinated Universal Time)
</details>

