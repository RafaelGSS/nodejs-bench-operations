## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,661,785|9830893|
|Using indexof|19,687,397|9843699|
|Using RegExp.test|9,245,646|4622824|
|Using RegExp.text with cached regex pattern|9,407,774|4703888|
|Using new RegExp.test|3,658,511|1829256|
|Using new RegExp.test with cached regex pattern|4,137,490|2068746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:22:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":19661785.606771756,"samples":9830893},{"name":"Using indexof","opsSec":19687397.33049322,"samples":9843699},{"name":"Using RegExp.test","opsSec":9245646.039925639,"samples":4622824},{"name":"Using RegExp.text with cached regex pattern","opsSec":9407774.965127222,"samples":4703888},{"name":"Using new RegExp.test","opsSec":3658511.5975502916,"samples":1829256},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4137490.9490631856,"samples":2068746}]}-->
