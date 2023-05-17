# 目次

- 環境構築
- 開発の進め方

# 環境構築

1. ビルド実行

```bash
$ docker-compose build
```

2. ライブラリインストール

```bash
$ docker-compose run --rm app sh -c 'cd app && npm install'
```

3. 起動

```bash
$ docker-compose up -d
```

# 開発の進め方

- dev の最新ブランチから派生したブランチを作成して進める
- 派生ブランチは、issues/#GitHub の issue 番号 で作成する
- Git コミットや PR（PullRequest）のコメントには、 #GitHub の issue 番号 を記載して、issue とコミットログを関連付けるようにする
- PR は、レビューしてもらった後、マージは開発者自身で実施する
- PR レビューの負荷と不具合混入の軽減のため、PR は小さくすることを意識する。issue が大きい場合は、issue 自体を小さく分割する
- main ブランチに対して、直接コミット、Push することは基本的に NG。dev ブランチからマージして本番反映する流れとする
- dev ブランチに対しても基本的には、直接更新することは避ける。issue ごとの派生ブランチからマージして反映する流れとする

# 初期構築の備忘録

1. PJ ディレクトリ作成

```bash
$ mkdir blog_react_example && cd blog_react_example
```

2. Dockerfile 作成

```bash
$ touch Dockerfile && vim Dockerfile
```

3. docker-compose.yml 作成

```bash
$ touch Dockerfile && vim Dockerfile
```

4. ビルド実行

```bash
$ docker-compose build
```

5. react アプリの作成

```bash
$ docker-compose run --rm app sh -c 'npx create-react-app app --template typescript'
```

6. コンテナ実行

```bash
$ docker-compose up -d
```

# 参考資料

- フォルダ構成
  - https://tech-blog.rakus.co.jp/entry/20230208/frontend
  - https://zenn.dev/manalink_dev/articles/bulletproof-react-is-best-architecture
