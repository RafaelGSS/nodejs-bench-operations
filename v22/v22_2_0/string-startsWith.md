## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,135,687|7567844|
|(short string) (true) String#slice and strict comparison|15,893,421|7946711|
|(long string) (true) String#startsWith|14,642,266|7321134|
|(long string) (true) String#slice and strict comparison|16,034,783|8017392|
|(short string) (false) String#startsWith|15,984,401|7992201|
|(short string) (false) String#slice and strict comparison|16,192,583|8096292|
|(long string) (false) String#startsWith|15,572,565|7786284|
|(long string) (false) String#slice and strict comparison|16,220,750|8110376|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:54:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15135687.999987267,"samples":7567844},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15893421.872821676,"samples":7946711},{"name":"(long string) (true) String#startsWith","opsSec":14642266.155059405,"samples":7321134},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16034783.839703793,"samples":8017392},{"name":"(short string) (false) String#startsWith","opsSec":15984401.296684245,"samples":7992201},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16192583.708324034,"samples":8096292},{"name":"(long string) (false) String#startsWith","opsSec":15572565.53949087,"samples":7786284},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16220750.37811018,"samples":8110376}]}-->
