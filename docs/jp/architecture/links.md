# Kairosのリンク

## Develope Environment

### [Kairos System](http://192.168.210.201:4200/)

### [Queue System](http://192.168.210.201:15672/)

- RabbitMQの利用

### [Log System](http://192.168.210.201:3000/)

- grafana, promtail, lokiの利用

### [Git System](http://192.168.210.201:18080/)

- Gitlab を用いてソースコードを格納する。

### [Nexus Repository](http://192.168.210.201:18081/)

- Repository System はdocker イメージ ( Docker Hubなど)とJar ファイル ( mavenなど)を保存する。

### [Jenkins (CI/CDシステム)](http://192.168.210.201:18083/)

- 継続的インテグレーション/継続的デリバリー（CI/CD）継続的デプロイメントシステム
- システムは以下のことを自動化する：
  - ソースコードをビルドする。
  - Docker イメージを作成する
  - Docker イメージをDocker Repository Hub (Nexus Repository)へプッシュする。
  - デプロイ先の環境にアクセスして、Dockerイメージをプルしてから実行する。

### 今後は展開予定システム

- ソースコードのレビュー
- 監視システム : Spring boot actuator, Spring boot Admin, Prometheus
- LoadTest, Performance Test: K6
