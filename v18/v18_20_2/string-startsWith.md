## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|242,798,072|96|
|(short string) (true) String#slice and strict comparison|907,590,467|99|
|(long string) (true) String#startsWith|148,295,355|94|
|(long string) (true) String#slice and strict comparison|904,263,233|94|
|(short string) (false) String#startsWith|485,880,603|97|
|(short string) (false) String#slice and strict comparison|907,039,367|99|
|(long string) (false) String#startsWith|362,812,553|94|
|(long string) (false) String#slice and strict comparison|905,429,006|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:43:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":242798071.65754873,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":907590466.8526926,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":148295354.7681286,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":904263233.1583979,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":485880602.74860084,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":907039366.5681862,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":362812552.52354395,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":905429006.4895799,"samples":7}]}-->
