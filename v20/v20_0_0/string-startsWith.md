## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|309,309,099|96|
|(short string) (true) String#slice and strict comparison|913,539,366|98|
|(long string) (true) String#startsWith|195,727,937|95|
|(long string) (true) String#slice and strict comparison|912,313,355|97|
|(short string) (false) String#startsWith|957,987,278|98|
|(short string) (false) String#slice and strict comparison|913,594,403|98|
|(long string) (false) String#startsWith|955,677,665|99|
|(long string) (false) String#slice and strict comparison|913,328,609|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:47:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":309309098.8265051,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":913539365.9187286,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":195727936.64058283,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":912313355.3531978,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":957987277.5829635,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":913594402.5484104,"samples":8},{"name":"(long string) (false) String#startsWith","opsSec":955677665.105909,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":913328609.3477162,"samples":7}]}-->
