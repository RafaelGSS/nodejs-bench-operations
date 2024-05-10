## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,542,062|7271032|
|(short string) (true) String#slice and strict comparison|15,144,849|7572425|
|(long string) (true) String#startsWith|13,477,614|6738808|
|(long string) (true) String#slice and strict comparison|15,170,182|7585092|
|(short string) (false) String#startsWith|14,812,468|7406235|
|(short string) (false) String#slice and strict comparison|15,252,213|7626108|
|(long string) (false) String#startsWith|14,598,871|7299436|
|(long string) (false) String#slice and strict comparison|15,215,360|7607681|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:33:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14542062.051369984,"samples":7271032},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15144849.727402668,"samples":7572425},{"name":"(long string) (true) String#startsWith","opsSec":13477614.436572416,"samples":6738808},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15170182.78639319,"samples":7585092},{"name":"(short string) (false) String#startsWith","opsSec":14812468.696562883,"samples":7406235},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15252213.986699527,"samples":7626108},{"name":"(long string) (false) String#startsWith","opsSec":14598871.883213554,"samples":7299436},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15215360.9957317,"samples":7607681}]}-->
