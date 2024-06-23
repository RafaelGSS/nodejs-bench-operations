## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|17,967,738|8983870|
|using Array.includes (first item)|19,785,738|9910460|
|Using raw comparison|20,498,631|10249316|
|Using raw comparison (first item)|21,179,559|10589780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:36:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":17967738.216181163,"samples":8983870},{"name":"using Array.includes (first item)","opsSec":19785738.53099119,"samples":9910460},{"name":"Using raw comparison","opsSec":20498631.65842672,"samples":10249316},{"name":"Using raw comparison (first item)","opsSec":21179559.379135843,"samples":10589780}]}-->
