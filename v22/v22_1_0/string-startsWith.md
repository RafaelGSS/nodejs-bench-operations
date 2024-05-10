## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,753,387|7876694|
|(short string) (true) String#slice and strict comparison|16,005,941|8002971|
|(long string) (true) String#startsWith|14,302,500|7151251|
|(long string) (true) String#slice and strict comparison|15,692,538|7846270|
|(short string) (false) String#startsWith|15,905,084|7952543|
|(short string) (false) String#slice and strict comparison|16,075,458|8037730|
|(long string) (false) String#startsWith|15,523,330|7761666|
|(long string) (false) String#slice and strict comparison|16,015,756|8007879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:36:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15753387.684914732,"samples":7876694},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16005941.935949132,"samples":8002971},{"name":"(long string) (true) String#startsWith","opsSec":14302500.026243975,"samples":7151251},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15692538.179633727,"samples":7846270},{"name":"(short string) (false) String#startsWith","opsSec":15905084.377957197,"samples":7952543},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16075458.553138178,"samples":8037730},{"name":"(long string) (false) String#startsWith","opsSec":15523330.354508016,"samples":7761666},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16015756.27022118,"samples":8007879}]}-->
