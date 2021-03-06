PGDMP         -                w            sanpham    10.7    10.7     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �
           1262    16393    sanpham    DATABASE     �   CREATE DATABASE sanpham WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE sanpham;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �
           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �
           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16398    product_info    TABLE     �   CREATE TABLE public.product_info (
    id bigint NOT NULL,
    product_name text,
    product_price bigint NOT NULL,
    image text
);
     DROP TABLE public.product_info;
       public         postgres    false    3            �            1259    16394    product_info_id_seq    SEQUENCE     |   CREATE SEQUENCE public.product_info_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.product_info_id_seq;
       public       postgres    false    198    3            �
           0    0    product_info_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.product_info_id_seq OWNED BY public.product_info.id;
            public       postgres    false    196            �            1259    16396    product_info_product_price_seq    SEQUENCE     �   CREATE SEQUENCE public.product_info_product_price_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.product_info_product_price_seq;
       public       postgres    false    3    198            �
           0    0    product_info_product_price_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.product_info_product_price_seq OWNED BY public.product_info.product_price;
            public       postgres    false    197            q
           2604    16401    product_info id    DEFAULT     r   ALTER TABLE ONLY public.product_info ALTER COLUMN id SET DEFAULT nextval('public.product_info_id_seq'::regclass);
 >   ALTER TABLE public.product_info ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    196    198            r
           2604    16402    product_info product_price    DEFAULT     �   ALTER TABLE ONLY public.product_info ALTER COLUMN product_price SET DEFAULT nextval('public.product_info_product_price_seq'::regclass);
 I   ALTER TABLE public.product_info ALTER COLUMN product_price DROP DEFAULT;
       public       postgres    false    197    198    198            �
          0    16398    product_info 
   TABLE DATA               N   COPY public.product_info (id, product_name, product_price, image) FROM stdin;
    public       postgres    false    198   e       �
           0    0    product_info_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.product_info_id_seq', 12, true);
            public       postgres    false    196            �
           0    0    product_info_product_price_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.product_info_product_price_seq', 1, false);
            public       postgres    false    197            t
           2606    16407    product_info product_info_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.product_info
    ADD CONSTRAINT product_info_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.product_info DROP CONSTRAINT product_info_pkey;
       public         postgres    false    198            �
   �  x����N�0���S���\��$��V�elh��&��Rl�q��/�뮻��� ً�M��ۤMC;8v������;[ח��)��8!B�)����Y.ۆ�y{&ao��ifJ�=���0� �P쥰���Tr���k0���p0����֒���)�˫�����^HV�@ʨ���BlU!x�Ǌ�,��q#]�6D�<�}X*Y6YiW�J"U���?���O�0i�4w}��'�����s��o���!�H��D ���g�J>pyk�,n��3�MjmX�@�6/5"kg��e�ݺ���y���ّI��y��AU��G���g{�|�+{z����,������[��:�ޱ����ɛp�=V����թ�#=;s���^����=�S���}|����=r#����z/[�P���� ����"S���~�1N�ԏ���Ib%��K�+��L����YJj55�����fg+�ck�E�Z^~nG���P�aƊ��� S�0i�t��IR
��J�8D9�N�>-�v'�G9	I�BChN���jм�Q�$�!8���A����IsKmy7��A��ٵ���9�FM'l��Y����%��8��F�� E~��@Mo.��P�u�'^�ӧ���N�cc7���]�m�u��r���     