## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|132,076,009|88|
|(short string) (true) String#slice and strict comparison|145,276,819|82|
|(long string) (true) String#startsWith|90,560,354|86|
|(long string) (true) String#slice and strict comparison|146,822,495|85|
|(short string) (false) String#startsWith|139,333,495|84|
|(short string) (false) String#slice and strict comparison|150,319,842|87|
|(long string) (false) String#startsWith|140,005,430|85|
|(long string) (false) String#slice and strict comparison|146,731,251|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:53:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":132076008.69242074,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":145276819.27661863,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":90560353.52883291,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":146822495.38531655,"samples":5},{"name":"(short string) (false) String#startsWith","opsSec":139333495.03599852,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":150319841.9762042,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":140005429.7652799,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":146731250.79515186,"samples":6}]}-->
