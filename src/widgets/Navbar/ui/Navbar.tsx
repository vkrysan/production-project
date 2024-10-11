/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Log in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t(`Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. 
                    Suscipit eligendi autem earum praesentium 
                    nemo exercitationem rem, nam possimus, 
                    porro accusamus enim atque! Odit et fugit 
                    unde facilis impedit cupiditate dignissimos`)}
            </Modal>
        </div>
    );
};
