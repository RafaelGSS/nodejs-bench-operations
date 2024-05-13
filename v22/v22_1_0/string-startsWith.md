## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,646,243|7823122|
|(short string) (true) String#slice and strict comparison|15,935,283|7967642|
|(long string) (true) String#startsWith|14,448,148|7224075|
|(long string) (true) String#slice and strict comparison|15,799,268|7899635|
|(short string) (false) String#startsWith|15,856,652|7928327|
|(short string) (false) String#slice and strict comparison|15,988,983|7994492|
|(long string) (false) String#startsWith|15,518,359|7759181|
|(long string) (false) String#slice and strict comparison|15,910,022|7955012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:45:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15646243.24898929,"samples":7823122},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15935283.45820757,"samples":7967642},{"name":"(long string) (true) String#startsWith","opsSec":14448148.41068637,"samples":7224075},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15799268.104045056,"samples":7899635},{"name":"(short string) (false) String#startsWith","opsSec":15856652.414446017,"samples":7928327},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15988983.840051359,"samples":7994492},{"name":"(long string) (false) String#startsWith","opsSec":15518359.610225445,"samples":7759181},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15910022.6635507,"samples":7955012}]}-->
