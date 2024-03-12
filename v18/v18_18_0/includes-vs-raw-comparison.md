## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|818,526,754|99|
|using Array.includes (first item)|818,870,425|95|
|Using raw comparison|821,241,163|96|
|Using raw comparison (first item)|819,470,644|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":818526754.4608446,"samples":6},{"name":"using Array.includes (first item)","opsSec":818870424.8480488,"samples":7},{"name":"Using raw comparison","opsSec":821241162.8785468,"samples":7},{"name":"Using raw comparison (first item)","opsSec":819470643.8653044,"samples":6}]}-->
